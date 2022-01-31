import NavigationDay from "./NavigationDay";
import {useState} from "react";

export default function Navigation() {
    const [start, setStart] = useState(new Date());
    const [chosen, setChosen] = useState(new Date(start.getTime()));
    const today = new Date();

    const handleClick = (day) => {
        setChosen(new Date(day));
    }

    const handleStart = (day, arg) => {
        setStart(new Date(day.setDate(day.getDate() + arg)));
    }

    const daysArray = [new Date(start.getTime())];
    for (let i = 0; i < 5; i++) {
        const nextDay = new Date(daysArray[i].getTime());
        nextDay.setDate(nextDay.getDate() + 1);
        daysArray.push(nextDay);
    }

    return (
        <nav className="page-nav">
            {start.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0) ||
            <a className="page-nav__day page-nav__day_prev" onClick={() => handleStart(start, -1)} href="#"/>
            }
            {daysArray.map((day) =>
                <NavigationDay
                    date={day}
                    chosen={chosen}
                    handleClick={() => handleClick(day)}
                    key={day}
                />
            )}
            <a className="page-nav__day page-nav__day_next" onClick={() => handleStart(start, 1)} href="#"/>
        </nav>
    );
}
