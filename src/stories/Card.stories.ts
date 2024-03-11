import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Card',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Card',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Card',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Card',
  },
};


export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};