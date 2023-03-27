"use client";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
import { Post } from "@/service/posts";

type Props = {
	posts: Post[];
	categories: string[];
};

const ALL_POSTS = "All Posts";

const FilaterablePosts = ({ posts, categories }: Props) => {
	const [selected, setSelected] = useState(ALL_POSTS);
	const filteredPosts = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

	return (
		<section className="flex gap-6 m-4 justify-between">
			<PostsGrid posts={filteredPosts} />
			<Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={setSelected} />
		</section>
	);
};

export default FilaterablePosts;
