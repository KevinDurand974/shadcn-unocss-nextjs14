import { defineConfig, presetAttributify, presetUno, presetWebFonts, transformerDirectives } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetWebFonts({
			provider: "google",
			fonts: { sans: "Montserrat" },
		}),
		presetAnimations(),
		presetShadcn(),
	],
	transformers: [transformerDirectives()],
	content: {
		pipeline: {
			include: [/\.(vue|svelte|[jt]s|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/],
		},
		filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
	},
});
