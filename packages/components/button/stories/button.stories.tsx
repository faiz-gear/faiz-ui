import React from "react";
import { Meta } from "@storybook/react";

import { Button, ButtonProps } from "../src";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    radius: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

const defaultProps = {
  children: "Button",
  color: "primary",
  size: "md",
  radius: "md",
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
