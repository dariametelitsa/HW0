import type { Meta, StoryObj } from '@storybook/react';

import { Card } from "./Card";
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Card> = {
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof Card>;

export const CardDefault: Story = {
    render: () => <Card title={'Title'} text={'Some text'} changeText={action('changeText')} />
};

export const CardControls: Story = {
    args: {
        title: 'Title',
        text: 'Some text',
        changeText: action('changeText'),
    }
}

export default meta;