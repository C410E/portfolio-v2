import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Caio
                </Link>
            </div>
            <a href="https://github.com/OIACE/Resume" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar