import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Caio
                </Link>
            </div>
            <a href="" className="cta-btn">Resume</a>
        </div>
    )
}