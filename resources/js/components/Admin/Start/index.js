import SimpleButton from "../Buttons/SimpleButton";

export default function Start() {
    return (
        <div className="conf-step__wrapper text-center">
            <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
            <SimpleButton text={"Открыть продажу билетов"} callback={() => console.log('Start!')}/>
        </div>
    );
}
