import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<SignUp />
		</div>
	)
}