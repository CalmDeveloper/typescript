import {FC} from "react";
import {ICar} from "../../interfaces";
interface IProps {
    car:ICar
}
const CarDetails:FC<IProps> = ({car:{id,model,price,year}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <hr/>
        </div>
    );
};

export {CarDetails};