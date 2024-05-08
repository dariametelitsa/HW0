import type { Meta } from '@storybook/react';
import { accordionSet } from "./Select";
import { useState } from "react";
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