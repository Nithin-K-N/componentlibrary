import React from "react";

interface CheckBoxProps{
    label: string;
    checked?: boolean;
    onChange?: ()=>{}
}

function CheckBox(
    {
        label,
        checked = false,
        onChange
    }:CheckBoxProps
){

    return(
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    )
}

export default CheckBox;