import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                 Home
            </Link>
        
            <Link href="/testpage" legacyBehavior>
                <a> testpage </a>
            </Link>
            <style jsx>{`
                nav {
                    background-color: blue;
                }
                a {
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
}