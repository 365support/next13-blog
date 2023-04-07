import { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import CarouselPosts from "@/components/CarouselPosts";

export const metadata: Metadata = {
	title: "All Posts",
	description: "풀스택 관련 블로그 글",
};

export default function HomePage() {
	return (
		<>
			<Hero />
			{/* @ts-expect-error Server Component */}
			<FeaturedPosts />
			{/* @ts-expect-error Server Component */}
			<CarouselPosts />
		</>
	);
}
