import { getPostData } from "@/service/posts";
import Image from "next/image";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";

type Props = {
	params: {
		slug: string;
	};
};

const Postpage = async ({ params: { slug } }: Props) => {
	const post = await getPostData(slug);
	const { title, path, next, prev } = post;

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
			<section className="flex shadow-md">
				{prev && <AdjacentPostCard post={prev} type="prev" />}
				{next && <AdjacentPostCard post={next} type="next" />}
			</section>
		</article>
	);
};

export default Postpage;
