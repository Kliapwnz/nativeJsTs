import React, {MouseEvent} from 'react';

export const CallBack = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log("name govniame")
    }
    const focusLostHandler = () => {
        console.log("o no, toilet NO!")
    }
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>KLIApwnz</textarea>
            <input/>
            <button name="delete" onClick={deleteUser}>☻</button>
            <button name="save" onClick={deleteUser}>☺</button>
        </div>
    );
};

