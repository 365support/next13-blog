import { getAllPosts } from "@/service/posts";
import FilaterablePosts from "@/components/FilaterablePosts";

const PostsPage = async () => {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map((post) => post.category))];

	return <FilaterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;
