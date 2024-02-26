import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<SignIn />
		</div>
	)
}
