import type { Meta } from '@storybook/react';
import { accordionSet, Select } from "./Select";
import React, { memo, useMemo, useState } from "react";
import { SelectSmart } from "./SelectSmart";
import { action } from "@storybook/addon-actions";


const meta: Meta<typeof SelectSmart> = {
    component: SelectSmart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;

export const WithValue = () => {
    const [value, setValue] = useState<string | null>('2');

    return <SelectSmart items={accordionSet} value={value} onChange={setValue}/>
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | null>(null);
    return <SelectSmart items={accordionSet} value={value} onChange={setValue}/>
}


const SelectMemo = memo(SelectSmart);

export const SelectWithMemo = () => {
    const [cities, setCities] = React.useState([
        {title: 'Hey', value: '1'},
        {title: 'how', value: '2'},
        {title: 'are', value: '3'},
        {title: 'you', value: '4'},
        {title: 'dude', value: '5'},
    ]);

    const [counter, setCounter] = useState<number>(0);
    // const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');

    const accSetMemo = useMemo(() => {
        console.log('Привет, затупок')
        return cities.filter(el => +el.value > 4)
    },[cities]);


    return (
        <div style={{display: 'flex', gap: '20px'}}>
            {/*<SelectSmart items={cities} value={value1} onChange={setValue1}/>*/}
            <button onClick={()=>setCities([...cities,{title: 'new', value: cities.length + ''}])}>add</button>
            <SelectMemo items={accSetMemo} value={value2} onChange={setValue2}/>
            <button onClick={()=>setCounter(counter + 1)}>++</button>
            <div>Counter: {counter}</div>
        </div>
    );
}