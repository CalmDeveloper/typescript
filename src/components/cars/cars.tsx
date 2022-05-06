import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hook";
import {Car} from "../car/car";
import {carActions} from "../../redux";

const Cars:FC = () => {
const dispatch = useAppDispatch()
const {cars} = useAppSelector(state => state.carReducer)
useEffect(() => {
    dispatch(carActions.getAll())
},[dispatch])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};