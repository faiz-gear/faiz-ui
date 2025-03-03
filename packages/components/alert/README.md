# @faiz-ui/alert

Alert 组件用于显示提示信息，支持多种样式和功能。

## 安装

```bash
npm install @faiz-ui/alert
# or
yarn add @faiz-ui/alert
# or
pnpm add @faiz-ui/alert
```

## 使用

```jsx
import { Alert } from '@faiz-ui/alert'

export default function App() {
  return <Alert color="success">这是一个成功提示信息</Alert>
}
```

## 特性

- 支持多种颜色变体：primary, secondary, success, warning, danger, info
- 支持多种样式变体：solid, outline, ghost, light, flat, sketchy
- 支持自定义图标或隐藏图标
- 支持添加操作按钮
- 支持关闭按钮
- 支持控制显示/隐藏
- 支持自定义样式
