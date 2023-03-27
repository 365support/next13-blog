import { getPostData } from "@/service/posts";

type Props = {
	params: {
		slug: string;
	};
};

const Postpage = async ({ params: { slug } }: Props) => {
	const post = await getPostData(slug);

	return (
		<>
			<h1>{post.title}</h1>
			<pre>{post.content}</pre>
		</>
	);
};

export default Postpage;
