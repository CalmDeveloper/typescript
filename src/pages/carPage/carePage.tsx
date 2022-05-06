import {FC} from "react";
import {CarForm, Cars} from "../../components";
import {Outlet} from "react-router-dom";
const CarePage:FC = () => {
    return (
        <div>
            <div><CarForm/></div>
            <div>
                <Outlet/>
                <Cars/>
            </div>

        </div>
    );
};

export {CarePage};