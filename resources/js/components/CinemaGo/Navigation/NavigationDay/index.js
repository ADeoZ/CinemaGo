import classNames from "classnames/bind";

export default function NavigationDay(props) {
    const {handleClick} = props;
    const chosen = new Date(props.chosen);
    const date = new Date(props.date);
    const today = new Date();
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const classActive = [
        'page-nav__day',
        {
            'page-nav__day_today': date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0),
            'page-nav__day_chosen': date.setHours(0, 0, 0, 0) === chosen.setHours(0, 0, 0, 0),
            'page-nav__day_weekend': date.getDay() === 0 || date.getDay() === 6,
        }
    ];

    return (
        <a className={classNames(classActive)} onClick={handleClick} href="#">
            <span className="page-nav__day-week">{weekDays[date.getDay()]}</span>
            <span className="page-nav__day-number">{date.getDate()}</span>
        </a>
    );
}
