import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/" className="link">
                    Caio
                </Link>
            </div>
            <Link href="/resume" className="cta-btn">Resume</Link>
        </div>
    )
}

export default Navbar