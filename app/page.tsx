import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import {Tweet} from "react-tweet"
// react-tweet.vercel.app
import type { TwitterComponents } from "react-tweet";
import { components } from "./components/react-tweet/Tweet-components";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Products", href: "/products" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen overflow-x-hidden bg-gradient-to-tl from-green-100/90 via-green-100 to-gray-100/90 dark:from-black dark:via-zinc-600/20 dark:to-black">
			<nav className="my-16 animate-fade-in"> 
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link

							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-700 hover:text-zinc-100 dark:text-zinc-500 dark:hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				S MKHIZE
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-700 dark:text-zinc-500 ">
					Hi, my name is Siyanda, I'm building Web applications in South Africa.
					Using the latest technology{" "}
					<Link
						target="_blank"
						href="https://upstash..com"
						className="underline duration-500 hover:text-zinc-100 dark:hover:text-zinc-300 " 
					>
						JavaScript
					</Link>

					<br />
					and {" "}
					<Link
						target="_blank"
						href="https://unkey..dev"
						className="underline duration-500 hover:text-zinc-100 dark:hover:text-zinc-300"
					>
						C#
					</Link>{" "}
					.
				</h2>
			</div>
			<div className="tweet dark:dark flex min-h-screen items-center justify-center p-24">
				<Tweet id ="1692455752424722780" />
			</div>
		</div>
	);
}
