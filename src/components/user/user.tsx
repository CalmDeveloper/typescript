import {FC} from "react";
import {IUser} from "../../interfaces";
interface IProps{
    user:IUser
}
const User: FC<IProps> = ({user}) => {
    return (
        <div>
<div>{user.name}</div>
        </div>
    );
};

export {User};