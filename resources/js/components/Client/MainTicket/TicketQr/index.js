import {useEffect, useRef} from "react";
import QRCode from "qrcode";

export default function TicketQr(props) {
    const {code} = props;
    const imgEl = useRef(null);

    const generateQR = async (text) => {
        try {
            imgEl.current.src = await QRCode.toDataURL(
                text, {
                    errorCorrectionLevel: 'Q',
                    margin: 3,
                });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => generateQR(code), [imgEl]);

    return (
        <img ref={imgEl} className="ticket__info-qr" alt="QRCode"/>
    );
}
