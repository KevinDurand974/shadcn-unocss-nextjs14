import Open from "~/components/Open";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export default function Home() {
	return (
		<main>
			<h1 className="text-red text-12 font-900 @hover:text-green @hover:underline">Test</h1>
			<Button>Classic</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="secondary">Secondary</Button>
			<Card>
				<CardHeader>
					<CardTitle>This is the title</CardTitle>
					<CardDescription>The description</CardDescription>
				</CardHeader>
				<CardContent>Card content</CardContent>
				<CardFooter>Hello footer</CardFooter>
			</Card>

			<Open />
		</main>
	);
}
