import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../../reducers/authSlice";

export default function Exit() {
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
    }

    return (
        <>
            {token &&
            <div className="page-header__exit" onClick={handleClick}>
                Выход
            </div>
            }
        </>
    );
}
