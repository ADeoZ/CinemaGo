import {useNavigate} from "react-router-dom";

export default function Button(props) {
    const {text, link, callback} = props;
    const navigate = useNavigate();

    const clickHandle = () => {
        callback();
        navigate(link);
    }

    return (
        <button
            className="acceptin-button"
            onClick={clickHandle}
        >
            {text}
        </button>
    );
}
