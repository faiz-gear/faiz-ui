# Faiz-UI 开发记录

## 项目概述

Faiz-UI 是一个基于 React 和 Tailwind CSS 的组件库，采用组件逻辑与视图分离的设计模式，使用 tailwind-variants 进行样式管理。

## 当前任务

[X] 分析项目结构和代码规范
[X] 生成组件开发提示词模板
[X] 创建项目结构文档 (anatomy.md)
[X] 创建开发记录文档 (scratchpad.md)
[ ] 待添加新任务...

## 组件开发规范

1. **组件逻辑与视图分离**：

   - 使用 `use[ComponentName]` 自定义 Hook 处理组件逻辑
   - 组件文件只负责渲染，从 Hook 获取所需数据

2. **类型定义**：

   - 组件 Props 继承自 `HTMLFaizUIProps<'element'>`
   - 导出组件的 Props 类型供外部使用

3. **样式处理**：

   - 在 `packages/core/theme/src/components` 中定义组件样式
   - 使用 tailwind-variants 创建样式变体
   - 导出样式变体的类型

4. **组件导出**：
   - 在 index.ts 中导出组件、类型和 Hook

## 已有组件

1. **Button**：按钮组件

   - 支持颜色、尺寸、圆角变体
   - 集成水波纹效果

2. **Ripple**：水波纹效果组件

   - 用于交互反馈

3. **LandingCard**：登陆卡片组件

## 开发工具

- **Plop**: 用于生成组件和 Hook 模板
- **Turborepo**: 用于优化构建流程
- **Changesets**: 用于版本管理和发布
- **Storybook**: 用于组件开发和文档

## 注意事项

1. 新组件开发流程：

   - 使用 `pnpm create:comp` 创建组件基础结构
   - 在 theme 包中定义组件样式
   - 实现组件逻辑和视图
   - 编写 Storybook 示例

2. 版本管理：
   - 使用 Changesets 进行版本管理
   - 每次修改后使用 `pnpm changeset` 记录变更
   - 发布前使用 `pnpm version` 更新版本
   - 使用 `pnpm release` 发布包
