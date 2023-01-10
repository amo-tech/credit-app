import React from "react";
import { useState } from "react";

export const AmountOfMoney = () => {
    const [val, setVal] = useState("");
    const inputText = (e) => {
        setVal(e.target.value);
    }
    const createVal = () => {
        setVal([...val, val]);
    };

    const addCredit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: val,
        };
        createVal(newTodo);
        setVal("");
    };

    const confirmContent = () => {
        console.log(val)
    };

    return (
        <form onSubmit={addCredit}>
            <input
                type="number"
                placeholder="How much"
                value={val}
                onChange={inputText}
            />
            {/* コンボボックスにする？ */}
            <button onClick={confirmContent}>
                OK
            </button>
        </form>
    )
};