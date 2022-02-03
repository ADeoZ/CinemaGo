import CancelSave from "../Buttons/CancelSave";
import Movies from "./Movies";
import SeancesHalls from "./SeancesHalls";

export default function Seances() {
    return (
        <div className="conf-step__wrapper">
            <Movies />
            <SeancesHalls />

            {/*<div className="conf-step__seances">*/}
            {/*    <div className="conf-step__seances-hall">*/}
            {/*        <h3 className="conf-step__seances-title">Зал 1</h3>*/}
            {/*        <div className="conf-step__seances-timeline">*/}
            {/*            /!*<div className="conf-step__seances-movie"*!/*/}
            {/*            /!*     style="width: 60px; background-color: rgb(133, 255, 137); left: 0;">*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-start">00:00</p>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*            /!*<div className="conf-step__seances-movie"*!/*/}
            {/*            /!*     style="width: 60px; background-color: rgb(133, 255, 137); left: 360px;">*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-start">12:00</p>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*            /!*<div className="conf-step__seances-movie"*!/*/}
            {/*            /!*     style="width: 65px; background-color: rgb(202, 255, 133); left: 420px;">*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака*!/*/}
            {/*            /!*        клонированных*!/*/}
            {/*            /!*        клонов</p>*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-start">14:00</p>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="conf-step__seances-hall">*/}
            {/*        <h3 className="conf-step__seances-title">Зал 2</h3>*/}
            {/*        <div className="conf-step__seances-timeline">*/}
            {/*            /!*<div className="conf-step__seances-movie"*!/*/}
            {/*            /!*     style="width: 65px; background-color: rgb(202, 255, 133); left: 595px;">*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака*!/*/}
            {/*            /!*        клонированных*!/*/}
            {/*            /!*        клонов</p>*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-start">19:50</p>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*            /!*<div className="conf-step__seances-movie"*!/*/}
            {/*            /!*     style="width: 60px; background-color: rgb(133, 255, 137); left: 660px;">*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*!/*/}
            {/*            /!*    <p className="conf-step__seances-movie-start">22:00</p>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <CancelSave cancel={() => console.log('cancel')} save={() => console.log('save')}/>
        </div>
    );
}
