import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Shadcn-ui + UnoCSS",
	description: "A magical app with Shadcn and Unocss (no more tailwind)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
