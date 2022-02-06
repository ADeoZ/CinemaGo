import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HallCheckbox from "./HallCheckbox";
import SimpleButton from "../Buttons/SimpleButton";
import {updateHall} from "../../../reducers/adminSlice";

export default function Start() {
    const {halls} = useSelector((state) => state.admin);
    const [changedHalls, setChangedHalls] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setChangedHalls(halls);
    }, [halls]);

    const handleChange = (hall) => {
        setChangedHalls(prevState => prevState.map((item) =>
            item.id === hall.id ? {...item, "opened": !+item.opened} : item)
        );
    }

    const handleSubmit = () => {
        changedHalls.forEach((item) => {
            if (halls.find((hall) => hall.id === item.id).opened !== item.opened) {
                dispatch(updateHall(item));
            }
        });
    }

    return (
        <div className="conf-step__wrapper text-center">
            <p className="conf-step__paragraph">Открытые залы:</p>
            <ul className="conf-step__list conf-step__list_start">
                {changedHalls.map((hall) =>
                    <li key={hall.id}>
                        <HallCheckbox
                            id={hall.id}
                            name={hall.name}
                            opened={+hall.opened}
                            callback={() => handleChange(hall)}
                        />
                    </li>
                )}
                {halls.length === 0 && <p className="conf-step__paragraph">Залы отсутствуют</p>}
            </ul>
            <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
            <SimpleButton text={"Открыть продажу билетов"} callback={handleSubmit}/>
        </div>
    );
}
