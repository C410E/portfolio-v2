import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Caio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1veP0uWg_yYiDjB6TfXa8u7UXtM3ZqadIgkULy0NpcH8/edit" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar