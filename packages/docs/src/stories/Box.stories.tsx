import { Box, BoxProps, Text } from '@jsrocket-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla, quam imperdiet pretium congue, odio lacus iaculis dolor
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
