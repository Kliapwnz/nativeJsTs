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

    return (
        <div>
            <textarea onChange={onNameChanged}>KLIApwnz</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    );
};

