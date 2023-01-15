import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/" className={[
                styles.link,
                router.pathname === "/" ? styles.active : ""
            ].join(" ") }
            >
                 Home
            </Link>
        
            <Link href="/testpage" legacyBehavior>
                <a className={`${styles.link} 
                                ${router.pathname === "/testpage" ? styles.active : ""}`}> testpage </a>
            </Link>
        </nav>
    );
}