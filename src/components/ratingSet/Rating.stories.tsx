import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from "./rating/Rating";
import { action } from "@storybook/addon-actions";


const meta: Meta<typeof Rating> = {
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof Rating>;

// export const Primary: Story = {
//     render: () => <Rating/>,
// };

export default meta;

const callback = action('Rating was changed inside the component');

export const EmptyRating = () => <Rating onChange={callback} defaultValue={0}/>
export const Rating1 = () => <Rating onChange={callback} defaultValue={1} />
export const Rating5 = () => <Rating onChange={callback} defaultValue={5} />