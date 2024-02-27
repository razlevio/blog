import { NextRequest, NextResponse } from "next/server"

import { db } from "@/lib/db"

/**
 * Retrieves a list of all blog posts: Endpoint: GET /api/posts
 * @param {NextRequest} req The request object.
 * @returns {NextResponse} The response object with the list of posts.
 */
export async function GET(req: NextRequest) {
	const posts = await db.post.findMany()
	return NextResponse.json(posts)
}


/**
 * Creates a new blog post: Endpoint: POST /api/posts
 * @param {NextRequest} req The request object containing the post data.
 * @returns {NextResponse} The response object with a success or error message.
 */
export async function POST(req: NextRequest) {
	const { userId, title, content } = await req.json()

	if (!userId || !title || !content) {
		return NextResponse.json({ error: "User ID, title, and content are required" }, { status: 400 })
	}

	const post = await db.post.create({
		data: {
			userId,
			title,
			content,
		},
	})
	if (!post) {
		return NextResponse.json({ error: "Post not created" }, { status: 500 })
	}
	return NextResponse.json({ message: "Post created successfully" }, { status: 201 })
}
