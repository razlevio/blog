import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"
/**
 * Retrieves a single blog post by its unique ID: Endpoint: GET /api/posts/[id]
 * @param {NextRequest} req The request object.
 * @param {{ params: { id: string } }} { params } Object containing route parameters.
 * @returns {NextResponse} The response object with the post data or an error message.
 */
export async function GET(req: NextRequest, { params } : { params: { id: string } }) {
	const post = await db.post.findUnique({
		where: { id: params.id }
	});
	if (!post) {
		return NextResponse.json("Post not found", { status: 404 });
	}

  return NextResponse.json(post);
}

/**
 * Updates an existing post by its ID: Endpoint: PUT /api/posts/[id]
 * @param {NextRequest} req The request object containing the updated data.
 * @param {{ params: { id: string } }} { params } Object containing route parameters.
 * @returns {NextResponse} The response object with a success message or an error message.
 */
export async function PUT(req: NextRequest, { params } : { params: { id: string } }) {
	const { title, content } = await req.json()

	const updateData: { title?: string; content?: string } = {};
  if (title) updateData.title = title;
  if (content) updateData.content = content;

	if (!Object.keys(updateData).length) {
    return NextResponse.json({ error: "At least title or content must be provided" }, { status: 400 });
  }

  try {
    const post = await db.post.update({
      where: { id: params.id },
      data: updateData,
    });
    if(post) return NextResponse.json({ message: "Post updated successfully", post });
		else return NextResponse.json({ error: "Post not updated" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Post not found or update failed" }, { status: 404 });
  }
}

/**
 * Deletes a post by its ID: Endpoint: DELETE /api/posts/[id]
 * @param {NextRequest} req The request object.
 * @param {{ params: { id: string } }} { params } Object containing route parameters.
 * @returns {NextResponse} The response object with a success message or an error message.
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
    await db.post.delete({
      where: { id: params.id },
    });
   return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
}
