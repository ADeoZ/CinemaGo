import Header from "./Header";
import Halls from "./Halls";
import Seats from "./Seats";
import Prices from "./Prices";
import Seances from "./Seances";
import Start from "./Start";
import Wrapper from "./Wrapper";
import Popup from "./Popup";

export default function Admin() {
    return (
        <>
            <Popup />
            <Header/>
            <main className="conf-steps">
                <Wrapper title={"Управление залами"}>
                    <Halls/>
                </Wrapper>
                <Wrapper title={"Конфигурация залов"}>
                    <Seats/>
                </Wrapper>
                <Wrapper title={"Конфигурация цен"}>
                    <Prices/>
                </Wrapper>
                <Wrapper title={"Сетка сеансов"}>
                    <Seances/>
                </Wrapper>
                <Wrapper title={"Открыть продажи"}>
                    <Start/>
                </Wrapper>
            </main>
        </>
    );
}
