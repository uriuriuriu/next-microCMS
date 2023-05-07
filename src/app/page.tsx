import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/static/" className={styles.card}>
          <h2>
            Static <span>-&gt;</span>
          </h2>
          <p>SSG</p>
        </Link>
        <Link href="/dynamic/" className={styles.card}>
          <h2>
            Dynamic <span>-&gt;</span>
          </h2>
          <p>SSR</p>
        </Link>
        <Link href="/suspense/" className={styles.card}>
          <h2>
            Suspense <span>-&gt;</span>
          </h2>
          <p>SSR(parts)</p>
        </Link>
      </div>
    </main>
  );
}
