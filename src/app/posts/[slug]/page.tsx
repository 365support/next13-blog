import { getPostData } from "@/service/posts";
import Image from "next/image";
import PostContent from "@/components/PostContent";

type Props = {
	params: {
		slug: string;
	};
};

const Postpage = async ({ params: { slug } }: Props) => {
	const post = await getPostData(slug);
	const { title, path } = post;

	return (
		<article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
			<Image
				className="rounded-2xl w-full h-1/5 max-h-[500px]"
				src={`/images/posts/${path}.png`}
				alt={title}
				width={760}
				height={420}
			/>
			<PostContent post={post} />
		</article>
	);
};

export default Postpage;
