import type { Meta } from '@storybook/react';
import { SelectOptions, SelectYou } from "./SelectYou";
import React, { useState } from "react";


const meta: Meta<typeof SelectYou> = {
    component: SelectYou,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;


const options: SelectOptions[] = [
    {label: 'First', value: 1},
    {label: 'Second', value: 2},
    {label: 'Third', value: 3},
    {label: 'Fourth', value: 4},
    {label: 'Fifth', value: 5},
];
export const SelectYouBasic = () => {
    const [value, setValue] = useState<SelectOptions | undefined>(options[0]);//checked values
    return <SelectYou options={options} value={value} onChange={o => setValue(o)} />
};


export const SelectYouMultiple = () => {
    const [value, setValue] = useState<SelectOptions[]>([options[0]]);

    return <SelectYou multiple options={options} value={value} onChange={o => setValue(o)} />
};