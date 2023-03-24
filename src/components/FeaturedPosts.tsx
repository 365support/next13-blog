import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

const FeaturedPosts = async () => {
	const posts = await getFeaturedPosts();
	return (
		<section>
			<h2 className="text-2xl font-bold my-2">Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
};

export default FeaturedPosts;
