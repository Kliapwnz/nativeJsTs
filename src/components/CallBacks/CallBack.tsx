import React from 'react';

export const CallBack = () => {
    const deleteUser = () => {
        alert("delete please bro")
    }
    const saveUser = () => {
        alert("save please bro")
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
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    );
};

