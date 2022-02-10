import Exit from "./Exit";

export default function Header() {
    return (
        <header className="page-header">
            <div className="page-header__wrapper">
                <h1 className="page-header__title">Идём<span>в</span>кино</h1>
                <span className="page-header__subtitle">Администраторррская</span>
            </div>
            <Exit/>
        </header>
    );
}
