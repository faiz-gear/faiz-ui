# Faiz-UI 项目结构

## 项目概述

Faiz-UI 是一个基于 React 和 Tailwind CSS 的手绘风格的UI组件库，采用 monorepo 结构管理。项目使用 pnpm workspace 进行包管理，使用 Turborepo 进行构建优化，使用 Changesets 进行版本管理和发布。

## 目录结构

```
faiz-ui/
├── apps/                  # 应用目录
│   ├── docs/              # 文档网站
│   └── web/               # 示例网站
├── packages/              # 包目录
│   ├── components/        # UI 组件
│   │   ├── button/        # 按钮组件
│   │   ├── landing-card/  # 登陆卡片组件
│   │   └── ripple/        # 水波纹效果组件
│   ├── core/              # 核心功能
│   │   ├── react/         # React 相关功能
│   │   ├── system/        # 系统级功能
│   │   └── theme/         # 主题相关功能
│   ├── eslint-config-custom/ # ESLint 配置
│   ├── storybook/         # Storybook 配置
│   ├── tsconfig/          # TypeScript 配置
│   └── utilities/         # 工具函数
│       └── react-utils/   # React 工具函数
├── plop/                  # 代码生成模板
│   ├── component/         # 组件模板
│   └── hook/              # Hook 模板
├── .changeset/            # Changesets 配置
├── .cursor/               # Cursor IDE 配置
├── .turbo/                # Turborepo 缓存
└── ...                    # 其他配置文件
```

## 组件结构

每个组件包遵循以下结构：

```
packages/components/[component-name]/
├── src/
│   ├── index.ts           # 导出组件和类型
│   ├── [component-name].tsx  # 组件视图
│   └── use-[component-name].ts  # 组件逻辑 Hook
├── stories/               # Storybook 示例
├── __tests__/             # 测试文件
├── package.json           # 包配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 组件文档
```

## 核心包结构

### system

`@faiz-ui/system` 包提供了组件系统的基础功能：

- 类型定义 (`types.ts`)
- 工具函数 (`utils.ts`)，包括 `forwardRef` 等

### theme

`@faiz-ui/theme` 包使用 tailwind-variants 定义组件样式：

- 组件样式定义 (`src/components/`)
- 导出样式变体和类型

### react-utils

`@faiz-ui/react-utils` 包提供 React 相关的工具函数：

- Ref 相关工具 (`refs.ts`)

## 开发工具

- **Plop**: 用于生成组件和 Hook 模板
- **Turborepo**: 用于优化构建流程
- **Changesets**: 用于版本管理和发布
- **Storybook**: 用于组件开发和文档

## 开发流程

1. 使用 `pnpm create:comp` 创建新组件
2. 在 `packages/core/theme/src/components` 中定义组件样式
3. 实现组件逻辑和视图
4. 编写 Storybook 示例
5. 使用 `pnpm changeset` 记录变更
6. 使用 `pnpm version` 更新版本
7. 使用 `pnpm release` 发布包
