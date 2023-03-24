import { readFile } from "fs/promises";
import path from "path";

export type Post = {
	title: string;
	description: string;
	date: Date;
	category: string;
	path: string;
	featured: boolean;
};

export const getAllPosts = async (): Promise<Post[]> => {
	const filePath = path.join(process.cwd(), "data", "posts.json");
	return readFile(filePath, "utf-8")
		.then<Post[]>(JSON.parse)
		.then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
	return getAllPosts().then((posts) => posts.filter((post) => post.featured));
};
