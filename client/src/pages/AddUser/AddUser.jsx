import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {validator} from "../../components/apps/validation";
import { registerUser } from '../../redux/slices/usersSlice'
import AddPostCSS from "./AddUser.module.scss";
import {toast} from "react-toastify";
import AddUserIcon from "../../components/assets/icons/add-user.png"

export const AddUser = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("");
    const [touchedName, setTouchedName] = useState(false);
    const [touchedUsername, setTouchedUsername] = useState(false);
    const [touchedAvatar, setTouchedAvatar] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState(false);

    const isValidName = name.trim() !== "";
    const isValidUsername = username.trim().length > 1 && username.split("")[0] === "@";
    const isValidAvatar = avatar.trim() !== "";

    const dispatch = useDispatch();

    const onAddUser = (event) => {
        event.preventDefault();
        try {
            dispatch(registerUser({name, username, avatar}))
            if (isValidName && isValidUsername && isValidAvatar) {
                setName("");
                setUsername("");
                setAvatar("");
                setNewUserInfo(true);
                toast("New User Added")
            } else {
                setTouchedName(true);
                setTouchedUsername(true);
                setTouchedAvatar(true);
                toast("Please, fill all inputs");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={AddPostCSS.wrapper}>
            <div className={AddPostCSS.wrapper__main}>
                <form>
                    {newUserInfo && <div className={AddPostCSS.wrapper__container_newUserInfo}>
                        New User Added
                    </div>
                    }
                    <div className={AddPostCSS.wrapper__container}>
                        <div className={validator(touchedName, isValidName).classNameInput}>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                onBlur={() => setTouchedName(true)}
                            />
                        </div>
                        <div className={validator(touchedName, isValidName).classNameField}>
                            {validator(touchedName, isValidName).div}
                        </div>
                        <div className={validator(touchedUsername, isValidUsername).classNameInput}>
                            <input
                                type="text"
                                placeholder="Enter your Username starting with '@'"
                                value={username}
                                onChange={event => setUsername(event.target.value)}
                                onBlur={() => setTouchedUsername(true)}
                            />
                        </div>
                        <div className={validator(touchedUsername, isValidUsername).classNameField}>
                            {validator(touchedUsername, isValidUsername).div}
                        </div>
                        <div className={validator(touchedAvatar, isValidAvatar).classNameInput}>
                            <input
                                type="text"
                                placeholder="Enter link to your Avatar"
                                value={avatar}
                                onChange={event => setAvatar(event.target.value)}
                                onBlur={() => setTouchedAvatar(true)}
                            />
                        </div>
                        <div className={validator(touchedAvatar, isValidAvatar).classNameField}>
                            {validator(touchedAvatar, isValidAvatar).div}
                        </div>
                        <div
                            className={AddPostCSS.wrapper__container_button}>
                            <button
                                type="submit"
                                onClick={onAddUser}>
                                <img src={AddUserIcon}/>
                                Add User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};