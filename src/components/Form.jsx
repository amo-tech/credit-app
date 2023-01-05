import React from "react";
import { useState } from "react";


export const Form = () => {

    const radioCollection = ["shime", "kaomi"];
    const [borrowed, setBorrowed] = useState("kaomi");
    const onChangePerson = (e) => setBorrowed(e.target.value);
    return (
      <>
        {
            radioCollection.map((value) => {
                return (
                    <label key={value}>
                        <input
                            type="radio"
                            value={value}
                            checked={borrowed === value}
                            onChange={onChangePerson}
                        >
                        </input>
                        {value}
                    </label>
                )
            })
        }
      </>
    )
};