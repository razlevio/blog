import "@/styles/globals.css"

import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { appConfig } from "@/config/app"

export const metadata: Metadata = {
	title: {
		default: appConfig.name,
		template: "%s | " + appConfig.name,
	},
	applicationName: appConfig.name,
	description: appConfig.description,
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
	authors: [
		{
			name: "razlevio",
			url: "https://github.com/razlevio",
		},
	],
	creator: "razlevio",
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
	},
	verification: {
		google: "google",
		yandex: "yandex",
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
