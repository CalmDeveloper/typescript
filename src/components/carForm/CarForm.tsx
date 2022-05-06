import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux";

const CarForm:FC = () => {
   const dispatch =  useAppDispatch()
   const {register, handleSubmit,reset} =  useForm<ICar>()
    const submit:SubmitHandler<ICar> = async (car) => {
await dispatch(carActions.create({car}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm};