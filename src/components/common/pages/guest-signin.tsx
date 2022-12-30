import Link from "next/link";
import { signIn } from "next-auth/react";

function handleSignIn(e: MouseEvent) {
  e.preventDefault();
  signIn();
}

const GuestSignin = () => {
  return (
    <div>
      <span>You are not signed in</span>
      <hr />
      <Link href={`/api/auth/signin`} onClick={handleSignIn}>
        Sign in
      </Link>
    </div>
  );
};

export default GuestSignin;
