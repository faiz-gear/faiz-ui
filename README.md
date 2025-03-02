# Faiz-UI

Faiz-UI 是一个基于 React 和 Tailwind CSS 的现代组件库，采用 monorepo 结构管理。项目使用 pnpm workspace 进行包管理，使用 Turborepo 进行构建优化，使用 Changesets 进行版本管理和发布。

## 特性

- 🚀 基于 React 18+ 和 TypeScript 开发
- 🎨 使用 Tailwind CSS 和 tailwind-variants 进行样式管理
- 🧩 组件逻辑与视图分离，易于维护和扩展
- 📦 支持组件的自定义样式和变体
- 🔄 支持通过 `as` 属性更改渲染元素
- 📚 使用 Storybook 进行组件开发和文档

## 项目结构

```
faiz-ui/
├── apps/                  # 应用目录
│   ├── docs/              # 文档网站
│   └── web/               # 示例网站
├── packages/              # 包目录
│   ├── components/        # UI 组件
│   ├── core/              # 核心功能
│   ├── eslint-config-custom/ # ESLint 配置
│   ├── storybook/         # Storybook 配置
│   ├── tsconfig/          # TypeScript 配置
│   └── utilities/         # 工具函数
└── plop/                  # 代码生成模板
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
# 启动所有应用和包的开发模式
pnpm dev

# 启动 Storybook
pnpm dev:book
```

### 构建

```bash
# 构建所有应用和包
pnpm build

# 构建主题包
pnpm build:theme
```

### 创建新组件

```bash
pnpm create:comp
```

## 组件开发规范

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
└── README.md              # 组件文档
```

组件开发遵循以下规范：

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

## 版本管理

项目使用 Changesets 进行版本管理和发布：

```bash
# 记录变更
pnpm changeset

# 更新版本
pnpm version

# 发布包
pnpm release
```

## 开发工具

- **Plop**: 用于生成组件和 Hook 模板
- **Turborepo**: 用于优化构建流程
- **Changesets**: 用于版本管理和发布
- **Storybook**: 用于组件开发和文档

## 许可证

MIT
