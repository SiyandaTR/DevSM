import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme-context";
import ActiveSectionContextProvider from "./context/active-section-context";

export const metadata: Metadata = {
	title: {
		default: "SM",
		template: "%s | ",
	},
	description: "Software developer portfolio",
	openGraph: {
		title: "Portfolio",
		description:
			"Software developer portfolio",
		url: "https://siyanda.vercel.app",
		siteName: "S_Mkhize_front",
		images: [
			{
				url: "https://chronark.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-RSA",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "SiyandaTRMkhiz2",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<ThemeContextProvider>
				<head>
					<Analytics />
				</head>
				<ActiveSectionContextProvider>
				<body
					className={`bg-black ${
						process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
				>
					{children}
					<ThemeSwitch/>
				</body>
				</ActiveSectionContextProvider>
			</ThemeContextProvider>
		</html>
	);
}
