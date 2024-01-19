import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Caio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/11Fx4YCSCfeVPItio6L_vbL3jqhrBdq7ThFgtLQn9iY8/edit" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar