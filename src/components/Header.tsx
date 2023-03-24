import Link from "next/link";

const Header = () => {
	return (
		<header className="flex justify-between items-center p-4">
			<Link href="/">
				<h1 className="text-3xl font-bold">{"365support's Blog"}</h1>
			</Link>
			<nav className="flex gap-4">
				<Link href="/">home</Link>
				<Link href="/about">about</Link>
				<Link href="/posts">posts</Link>
				<Link href="/contact">contact</Link>
			</nav>
		</header>
	);
};

export default Header;
