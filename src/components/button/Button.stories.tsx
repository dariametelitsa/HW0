import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: () => <Button>Title</Button>,
};

export const Secondary: Story = {
    render: () => <Button outline>Title</Button>,
};

export default meta;