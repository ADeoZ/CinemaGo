import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="page-header">
            <Link to={"/"}><h1 className="page-header__title">Идём<span>в</span>кино</h1></Link>
        </header>
    );
}
