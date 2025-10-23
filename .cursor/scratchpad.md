# Faiz-UI 开发记录

## 项目概述

Faiz-UI 是一个基于 React 和 Tailwind CSS 的组件库，采用组件逻辑与视图分离的设计模式，使用 tailwind-variants 进行样式管理。

## 当前任务: 实现 Breadcrumbs 组件

### 任务目标
- [X] 使用 plop 创建组件基础结构
- [X] 创建 theme 样式定义
- [X] 实现 use-breadcrumbs hook
- [X] 实现 breadcrumbs 组件视图
- [X] 实现 breadcrumbs-item 子组件
- [X] 创建 stories 示例
- [X] 在 docs 网站添加文档
- [ ] 创建测试用例

### 设计要点
- 支持自定义分隔符（默认为 "/"）
- 支持不同尺寸（sm, md, lg）
- 支持颜色变体（primary, secondary, success, etc.）
- 符合手绘风格设计理念
- 支持禁用状态
- 支持当前项高亮

### 组件结构
- Breadcrumbs: 容器组件
- BreadcrumbItem: 面包屑项子组件

### 完成进度
1. ✅ 创建 breadcrumbs 样式主题 (theme/src/components/breadcrumbs.ts)
2. ✅ 实现 use-breadcrumbs hook
3. ✅ 实现 Breadcrumbs 和 BreadcrumbItem 组件
4. ✅ 创建 Storybook stories
5. ✅ 创建文档网站示例组件
6. ✅ 创建文档 MDX 文件
7. ✅ 更新 @faiz-ui/react 包导出
8. ✅ 构建所有包
9. ⏳ 测试文档网站

### 文件清单
**组件文件：**
- packages/components/breadcrumbs/src/breadcrumbs.tsx
- packages/components/breadcrumbs/src/breadcrumb-item.tsx
- packages/components/breadcrumbs/src/use-breadcrumbs.ts
- packages/components/breadcrumbs/src/index.ts

**样式文件：**
- packages/core/theme/src/components/breadcrumbs.ts

**Stories：**
- packages/components/breadcrumbs/stories/breadcrumbs.stories.tsx

**文档：**
- apps/docs/content/docs/components/navigation/breadcrumbs.mdx
- apps/docs/components/docs/breadcrumbs/*.tsx

**导出配置：**
- packages/core/theme/src/components/index.ts (已更新)
- packages/core/react/src/index.ts (已更新)
- packages/core/react/package.json (已更新依赖)

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

4. **Accordion**: 手风琴组件

5. **Alert**: 警告组件

6. **Avatar**: 头像组件

7. **Badge**: 徽章组件

8. **Breadcrumbs**: 面包屑导航组件 ✨新增✨
   - 支持自定义分隔符
   - 支持尺寸、颜色、变体
   - 支持下划线样式
   - 支持禁用状态
   - 自动标记当前项

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
   - 添加文档网站文档

2. 版本管理：
   - 使用 Changesets 进行版本管理
   - 每次修改后使用 `pnpm changeset` 记录变更
   - 发布前使用 `pnpm version` 更新版本
   - 使用 `pnpm release` 发布包
