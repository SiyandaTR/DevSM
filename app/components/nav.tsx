"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<motion.div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
				initial={{ y: -100, opacity: 0 }}
        		animate={{ y: 0, opacity: 1 }}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-green-950 hover:text-green-700 dark:text-zinc-400 dark:hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-green-950 hover:text-green-700 dark:text-zinc-400 dark:hover:text-zinc-100"
						>
							Contact
						</Link>
						
						
						<Link
							href="/products"
							className="duration-200 text-green-950 hover:text-green-700 dark:text-zinc-400 dark:hover:text-zinc-100"
						>
							Products
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-green-950 hover:text-green-700 dark:text-zinc-300 dark:hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</motion.div>
		</header>
	);
};
