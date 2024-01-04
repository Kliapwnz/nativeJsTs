import React from 'react';

export const CallBack = () => {
    const deleteUser = () => {
        alert("delete please bro")
    }
    const saveUser = () => {
        alert("save please bro")
    }


    return (
        <div>
            Hello
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    );
};

