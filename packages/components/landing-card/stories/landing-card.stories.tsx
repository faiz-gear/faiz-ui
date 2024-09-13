import React from "react";
import { Meta } from "@storybook/react";

import { LandingCard, LandingCardProps } from "../src";

const meta: Meta<typeof LandingCard> = {
  title: "Components/LandingCard",
  component: LandingCard,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success"],
    },
  },
};

export default meta;

const defaultProps = {
  color: "primary",
};

const Template = (args: LandingCardProps) => (
  <div className="grid grid-cols-3 gap-6 p-4 w-full dark:bg-black dark:text-white h-[800px]">
    {new Array(6).fill(0).map((_, index) => (
      <LandingCard key={index} {...args}>
        <div className="p-6">
          <h1 className="text-4xl font-bold">Landing Card</h1>
          <p className="text-lg mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula, quam sit amet vestibulum lacinia, justo nisi tempor neque,
            vel ultricies nulla mi a justo. Nullam ut erat nec enim accumsan
            feugiat.
          </p>
        </div>
      </LandingCard>
    ))}
  </div>
);

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
