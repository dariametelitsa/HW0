import { action } from "@storybook/addon-actions";
import { ChangeEvent, useRef, useState } from "react";

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const onChange=(event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange} />
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange=(event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.target.checked);
    }
    return <input type={"checkbox"} onChange={onChange} checked={parentValue} />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');
    const onChange=(event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.target.value);
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Varshava</option>
        <option value={'3'}>Karaganda</option>
    </select>
}

