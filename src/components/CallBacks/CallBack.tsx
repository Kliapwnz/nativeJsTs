import React, {MouseEvent, ChangeEvent} from 'react';

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
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log("Age?" + event.currentTarget.value)
    }
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>KLIApwnz</textarea>
            <input onChange={onAgeChanged} type="number"/>
            <button name="delete" onClick={deleteUser}>☻</button>
        </div>
    );
};

