import type { MouseEvent } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function handleSignOut(e: MouseEvent) {
    e.preventDefault();
    signOut();
  }

  function handleSignIn(e: MouseEvent) {
    e.preventDefault();
    signIn();
  }

  console.log(session);
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          // eslint-disable-next-line prettier/prettier
          className={`nojs-show ${!session && loading ? styles.loading : styles.loaded}`}
        >
          {/* SIGN IN BTN */}
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <Link
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={handleSignIn}
              >
                Sign in
              </Link>
            </>
          )}

          {/* Logged In */}
          {session?.user && (
            <>
              {/* Image */}
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}

              {/* EMAIL */}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>

              {/* LOGOUT */}
              <Link
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={handleSignOut}
              >
                Sign out
              </Link>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">API</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin">Admin</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
