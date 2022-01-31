import {useDispatch} from "react-redux";
import {showPopup} from "../../../reducers/popupSlice";
import CancelSave from "../Buttons/CancelSave";
import SimpleButton from "../Buttons/SimpleButton";

export default function Seances() {
    const dispatch = useDispatch();

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">
                <SimpleButton text={"Добавить фильм"} callback={() => dispatch(showPopup("addMovie"))}/>
            </p>
            <div className="conf-step__movies">
                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="../images/poster1.jpg"/>
                    <h3 className="conf-step__movie-title">Звёздные войны XXIII: Атака клонированных
                        клонов</h3>
                    <p className="conf-step__movie-duration">130 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="../images/poster2.jpg"/>
                    <h3 className="conf-step__movie-title">Миссия выполнима</h3>
                    <p className="conf-step__movie-duration">120 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="../images/poster3.jpg"/>
                    <h3 className="conf-step__movie-title">Серая пантера</h3>
                    <p className="conf-step__movie-duration">90 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="../images/poster4.jpg"/>
                    <h3 className="conf-step__movie-title">Движение вбок</h3>
                    <p className="conf-step__movie-duration">95 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="../images/poster5.jpg"/>
                    <h3 className="conf-step__movie-title">Кот Да Винчи</h3>
                    <p className="conf-step__movie-duration">100 минут</p>
                </div>
            </div>

            <div className="conf-step__seances">
                <div className="conf-step__seances-hall">
                    <h3 className="conf-step__seances-title">Зал 1</h3>
                    <div className="conf-step__seances-timeline">
                        {/*<div className="conf-step__seances-movie"*/}
                        {/*     style="width: 60px; background-color: rgb(133, 255, 137); left: 0;">*/}
                        {/*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*/}
                        {/*    <p className="conf-step__seances-movie-start">00:00</p>*/}
                        {/*</div>*/}
                        {/*<div className="conf-step__seances-movie"*/}
                        {/*     style="width: 60px; background-color: rgb(133, 255, 137); left: 360px;">*/}
                        {/*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*/}
                        {/*    <p className="conf-step__seances-movie-start">12:00</p>*/}
                        {/*</div>*/}
                        {/*<div className="conf-step__seances-movie"*/}
                        {/*     style="width: 65px; background-color: rgb(202, 255, 133); left: 420px;">*/}
                        {/*    <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака*/}
                        {/*        клонированных*/}
                        {/*        клонов</p>*/}
                        {/*    <p className="conf-step__seances-movie-start">14:00</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="conf-step__seances-hall">
                    <h3 className="conf-step__seances-title">Зал 2</h3>
                    <div className="conf-step__seances-timeline">
                        {/*<div className="conf-step__seances-movie"*/}
                        {/*     style="width: 65px; background-color: rgb(202, 255, 133); left: 595px;">*/}
                        {/*    <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака*/}
                        {/*        клонированных*/}
                        {/*        клонов</p>*/}
                        {/*    <p className="conf-step__seances-movie-start">19:50</p>*/}
                        {/*</div>*/}
                        {/*<div className="conf-step__seances-movie"*/}
                        {/*     style="width: 60px; background-color: rgb(133, 255, 137); left: 660px;">*/}
                        {/*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*/}
                        {/*    <p className="conf-step__seances-movie-start">22:00</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            <CancelSave cancel={() => console.log('cancel')} save={() => console.log('save')}/>
        </div>
    );
}
