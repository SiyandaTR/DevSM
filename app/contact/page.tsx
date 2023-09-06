"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/SiyandaTRMkhiz2",
		label: "Twitter",
		handle: "@SiyandaTRMkhiz2",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/SiyandaTR",
		label: "Github",
		handle: "SiyandaTR",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://Linkedin.com/SiyandaTR",
		label: "Linkedin",
		handle: "S Corey Mkhize",
	},
	{
		icon: <Mail size={20} />,
		href: "siyandam097@outlook.com",
		label: "Email",
		handle: "Dev SM@outlook",
	},
];
       
export default function Example() {
	return ( 
		<div className=" bg-gradient-to-tl  from-green-100/90 via-green-100 to-green-100/90 dark:from-zink-900/0 dark:via-zinc-900 dark:to-zinc-900/0">
			<Navigation />
			<div className="container  flex items-center justify-center px-4 mx-auto py-20">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-green-900 group-hover:text-green-700 bg-green-100 group-hover:bg-green-150 dark:text-zinc-200 dark:group-hover:text-white dark:bg-zinc-900 dark:group-hover:bg-zinc-900 group-hover:border-zinc-400/50 border-zinc-600 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-black group-hover:text-gray-500 dark:text-zinc-200 dark:group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-black group-hover:text-gray-500 dark:text-zinc-400 dark:group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
