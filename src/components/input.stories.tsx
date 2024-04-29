import { action } from "@storybook/addon-actions";
import { useRef, useState } from "react";

export default {
    title: 'input',
};

export const UncontrolledInput = () =>  <input /> ;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    return (
        <>
        <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
            <span> Actual value: {value}</span>
        </>
    )
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        // const el= document.getElementById('inputId') as HTMLInputElement;
        // setValue(el.value ? el.value : 'Hey');
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input ref={inputRef}  id={'inputId'} />
            <button onClick={save}>Save</button>
            <span> Actual value: {value}</span>
        </>
    )
}

    
export const ControlledInputWithFixedValue =() =>  <input value={'Pryanichek'} />

