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

export const SelectYouBasic = () => {
    //const [value, setValue] = useState<string | null>('2');
    const options: SelectOptions[] = [
        {label: 'First', value: 1},
        {label: 'Second', value: 2},
        {label: 'Third', value: 3},
        {label: 'Fourth', value: 4},
        {label: 'Fifth', value: 5},
    ]
    return <SelectYou options={options}  />
}