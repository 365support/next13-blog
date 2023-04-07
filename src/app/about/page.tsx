import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
	description: "365support 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
	return (
		<>
			<Hero />
			<section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
				<h2 className={TITLE_CLASS}>Who Am I?</h2>
				<p>
					프론트 개발자 <br />
				</p>
				{/* <h2 className={TITLE_CLASS}>Career</h2>
				<p></p> */}
				<h2 className={TITLE_CLASS}>Skills</h2>
				<p>
					React, Next.js, typescript,
					<br />
					Redux, Recoil, React-query
					<br />
				</p>
			</section>
		</>
	);
}
