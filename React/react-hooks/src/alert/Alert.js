import { useAlert } from "./AlertContext";

const Alert = () => {
    const alert = useAlert();

    if (!alert) return null;

    return (
        <div className={"alert  alert-danger"} onClick={alert.hide}>
            Важное сообщение
        </div>
    );
};

export default Alert;