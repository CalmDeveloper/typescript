import {FC, useEffect, useState} from "react";
import {useParams,Outlet} from "react-router-dom";
import {ICar} from "../../interfaces";
import {carService} from "../../services/car.service";
import {CarDetails} from "../../components";
import css from './carDetailsPage.module.css'

const CarDetailsPage:FC = () => {
    const {id} = useParams<{id: string}>()
   const [car,setCar] =  useState<ICar|null>(null)
    useEffect(() => {
        carService.getById(id as string).then(({data}) =>setCar(data) )
    },[id])
    return (
        <div className={css.carDetailsPage}>
            {car&& <CarDetails car={car}/>}
            <Outlet/>
        </div>
    );
};

export {CarDetailsPage};