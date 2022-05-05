import { useAlertToggle } from "./alert/AlertContext";

const Main = () => {
    const {show} = useAlertToggle();
    return (
        <div>
            <h1>
                Привет в примере с Context
            </h1>
            <button onClick = {show} className="btn btn-success">Показать alert</button>
        </div>
    );
};

export default Main;