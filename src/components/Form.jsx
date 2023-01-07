import React from "react";
import { useState } from "react";


export const Form = () => {

    const radioCollection = ["shime", "kyomu"];
    const [borrowed, setBorrowed] = useState("kyomu");
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
                        I am {value}
                    </label>
                )
            })
        }
      </>
    )
};