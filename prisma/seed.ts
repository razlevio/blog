import { db } from "@/lib/db"

async function main() {
	await db.post.createMany({
		data: [
			{
				userId: "user_2cup8PaqPToR58vGWwGghXr5noa",
				title: "First Blog Post",
				content: "This is the content of the first blog post.",
			},
			{
				userId: "user_2cup8PaqPToR58vGWwGghXr5noa",
				title: "Second Blog Post",
				content: "This is the content of the second blog post.",
			},
			{
				userId: "user_2cup8PaqPToR58vGWwGghXr5noa",
				title: "Third Blog Post",
				content: "This is the content of the third blog post.",
			},
		],
	})
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
