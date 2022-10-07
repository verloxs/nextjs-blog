import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "verloxs";
export const siteTitle = "the stars, like dust.";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.navLeft}>
              <div className={styles.user}>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={36}
                  width={36}
                  alt={name}
                />
                <div className={styles.names}>
                  <span className={styles.name}>verloxs</span>
                  <span className={styles.about}>the stars, like dust.</span>
                </div>
              </div>
            </div>
            <div className={styles.themeToggle}>TOGGLE</div>

            {}
          </>
        ) : (
          // after you click a link styling for header
          <>
            <Link href="/">
              <a>
                <div className={styles.navLeft}>
                  <div className={styles.user}>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={utilStyles.borderCircle}
                      height={36}
                      width={36}
                      alt={name}
                    />
                    <div className={styles.names}>
                      <span className={styles.name}>verloxs</span>
                      <span className={styles.about}>
                        the stars, like dust.
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <div className={styles.themeToggle}>TOGGLE</div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
