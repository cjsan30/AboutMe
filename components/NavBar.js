import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();

    return <nav>
        <Link href="/">
            <a style={{ color: router.pathname === "/" ? "red" : "blue"}}> Home </a>
        </Link>
    
        <Link href="/testpage">
            <a style={{ color: router.pathname === "/testpage" ? "red" : "blue"}}> testpage </a>
        </Link>
    </nav>
}