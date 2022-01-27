import Header from "./Header";
import Navigation from "./Navigation";

export default function CinemaGo(props) {
    return (
        <>
            <Header/>
            {props.nav && <Navigation/>}
            <main>
                {props.children}
            </main>
        </>
    );
}
