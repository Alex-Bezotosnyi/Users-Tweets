import React from "react";
import AddPostCSS from "../../pages/AddUser/AddUser.module.scss"

function validator(isTouched, isValid) {
    if (!isTouched && !isValid) {
        return {
            classNameField: AddPostCSS.wrapper__container,
            classNameInput: AddPostCSS.wrapper__container,
            div: "",
        };
    } else if (isTouched && !isValid) {
        return {
            classNameField: AddPostCSS.wrapper__container__field_error,
            classNameInput: AddPostCSS.wrapper__container__input_error,
            div: "Please, fill the input",
        };
    } else {
        return {
            classNameField: AddPostCSS.wrapper__container__field_success,
            classNameInput: AddPostCSS.wrapper__container__input_success,
            div: "Success",
        }
    }
}

export {
    validator,
}
