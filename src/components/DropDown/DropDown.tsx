import React from "react";

interface OptionDataType{
    value: string;
    label: string;
}

interface DropDownProps{
    title: string;
    options: OptionDataType[];
    value?: string;
    onChange?: ()=> {}
}

function DropDown(
    {
        title,
        options,
        value,
        onChange
    }:DropDownProps
){

    return(
        <select
            title={title}
            value={value}
            onChange={onChange}
        >
            {options.map(
                (option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                )
            )}
        </select>
    )
}

export default DropDown;