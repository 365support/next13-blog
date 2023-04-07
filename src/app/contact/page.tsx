import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

export const metadata: Metadata = {
	title: "Contact Me",
	description: "365support에게 메일 보내기",
};

const LINKS = [
	{ icon: <AiFillGithub />, url: "https://github.com/365support" },
	{ icon: <SiVelog />, url: "https://velog.io/@support" },
];

const ContactPage = () => {
	return (
		<section className="flex flex-col items-center">
			<h2 className="text-3xl font-bold my-2">Contact Me</h2>
			<p>mgjiwon@gmail.com</p>
			<ul className="flex gap-4 my-2">
				{LINKS.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noreferrer"
						className="text-5xl hover:text-yellow-400"
					>
						{link.icon}
					</a>
				))}
			</ul>
			<h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
			<ContactForm />
		</section>
	);
};

export default ContactPage;
