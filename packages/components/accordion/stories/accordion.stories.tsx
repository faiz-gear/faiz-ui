import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";

import {Accordion, AccordionItem, AccordionHeader, AccordionContent, AccordionProps} from "../src";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    color: {
      control: {type: "select"},
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: {type: "select"},
      options: ["solid", "outline", "ghost", "light", "flat", "sketchy"],
    },
    allowMultiple: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    customStyles: {
      control: "text",
    },
  },
  args: {
    color: "primary",
    size: "md",
    variant: "solid",
    allowMultiple: false,
    isDisabled: false,
  },
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content for stories
const sampleItems = [
  {
    value: "item-1",
    title: "什么是手绘风格设计？",
    content:
      "手绘风格设计是一种模拟手工绘制效果的设计风格，通过不规则的线条、轻微的旋转和独特的阴影效果，创造出温暖、亲切且富有个性的用户界面体验。这种设计风格摒弃了传统界面的刻板与机械感，为数字产品注入人文气息与艺术感。",
  },
  {
    value: "item-2",
    title: "如何实现手绘效果？",
    content:
      "通过 CSS 的 transform: rotate() 属性添加轻微旋转（约 -0.3 度），使用 box-shadow 创建偏移阴影效果，配合 border-radius 和不规则边框样式，以及手写风格的字体，共同营造出手绘的视觉效果。",
  },
  {
    value: "item-3",
    title: "组件有哪些特性？",
    content:
      "支持受控和非受控模式、单选或多选展开、完整的键盘导航支持、ARIA 无障碍属性、平滑的展开收起动画、多种颜色和样式变体、以及自定义样式扩展能力。",
  },
];

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      {sampleItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionHeader value={item.value}>{item.title}</AccordionHeader>
          <AccordionContent value={item.value}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-6">
      {["primary", "secondary", "success", "warning", "danger", "info"].map((color) => (
        <div key={color}>
          <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
            {color}
          </h3>
          <Accordion color={color as any} defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionHeader value="item-1">{color} 颜色手绘风格</AccordionHeader>
              <AccordionContent value="item-1">
                这是 {color} 颜色变体的手绘风格折叠面板，展示了不同颜色主题下的视觉效果。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      {["sm", "md", "lg"].map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 uppercase">
            {size}
          </h3>
          <Accordion size={size as any} defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionHeader value="item-1">{size.toUpperCase()} 尺寸示例</AccordionHeader>
              <AccordionContent value="item-1">
                这是 {size} 尺寸的折叠面板，展示了不同尺寸下的内边距和字体大小变化。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      {["solid", "outline", "ghost", "light", "flat", "sketchy"].map((variant) => (
        <div key={variant}>
          <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
            {variant}
          </h3>
          <Accordion variant={variant as any} defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionHeader value="item-1">{variant} 变体样式</AccordionHeader>
              <AccordionContent value="item-1">
                这是 {variant} 变体的手绘风格折叠面板，每种变体都有独特的视觉效果和交互体验。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  ),
};

export const MultipleSelection: Story = {
  render: () => (
    <Accordion allowMultiple defaultValue={["item-1", "item-3"]}>
      {sampleItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionHeader value={item.value}>{item.title}</AccordionHeader>
          <AccordionContent value={item.value}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const ControlledMode: Story = {
  render: () => {
    const [value, setValue] = useState<string>("item-2");

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded border border-blue-300"
            onClick={() => setValue("item-1")}
          >
            展开第一项
          </button>
          <button
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded border border-blue-300"
            onClick={() => setValue("item-2")}
          >
            展开第二项
          </button>
          <button
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded border border-blue-300"
            onClick={() => setValue("")}
          >
            全部收起
          </button>
        </div>
        <p className="text-sm text-gray-600">当前展开项: {value || "无"}</p>
        <Accordion value={value} onValueChange={setValue}>
          {sampleItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionHeader value={item.value}>{item.title}</AccordionHeader>
              <AccordionContent value={item.value}>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">整体禁用</h3>
        <Accordion isDisabled defaultValue="item-1">
          {sampleItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionHeader value={item.value}>{item.title}</AccordionHeader>
              <AccordionContent value={item.value}>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">单项禁用</h3>
        <Accordion defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionHeader value="item-1">正常项目</AccordionHeader>
            <AccordionContent value="item-1">这是一个正常的可交互项目。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" isDisabled>
            <AccordionHeader value="item-2">禁用项目</AccordionHeader>
            <AccordionContent value="item-2">这个项目被禁用了，无法展开或收起。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionHeader value="item-3">另一个正常项目</AccordionHeader>
            <AccordionContent value="item-3">这也是一个正常的可交互项目。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">自定义样式</h3>
        <Accordion color="primary" variant="sketchy" customStyles="max-w-2xl" defaultValue="item-1">
          <AccordionItem value="item-1" customStyles="bg-gradient-to-r from-blue-50 to-purple-50">
            <AccordionHeader value="item-1">渐变背景项目</AccordionHeader>
            <AccordionContent value="item-1">
              这个项目使用了自定义的渐变背景样式，展示了组件的样式扩展能力。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader value="item-2">标准样式项目</AccordionHeader>
            <AccordionContent value="item-2">
              这个项目使用标准样式，与上面的自定义样式形成对比。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 mb-2">无障碍功能说明</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 使用 Tab 键在折叠面板头部之间导航</li>
          <li>• 使用 Enter 或 Space 键展开/收起面板</li>
          <li>• 屏幕阅读器会正确读取展开状态和内容</li>
          <li>• 支持 ARIA 属性：aria-expanded, aria-controls, aria-labelledby</li>
        </ul>
      </div>

      <Accordion defaultValue="item-1">
        {sampleItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionHeader value={item.value}>{item.title}</AccordionHeader>
            <AccordionContent value={item.value}>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
};
