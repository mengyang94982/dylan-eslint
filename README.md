# Dylan 的 ESLint 配置插件

- 集成了 Prettier，自动修复并格式化
- 多种 Eslint 预设配置: JavaScript, JSON, TypeScript, Vue, React
- 通过 Prettier 去格式化其他类型文件: HTML, CSS, Less, Sass, Scss, Markdown, MDX, yaml 和 yml

## 用法

### 安装

```bash
pnpm i -D eslint typescript eslint-config-dylanjs
```

### ESLint 配置文件

创建配置文件 .eslintrc

```json
{
  "extends": "dylanjs"
}
```

### 配置介绍

- dylanjs: 基础配置，用于格式化 JS、TS、JSON
- dylanjs/vue: 继承基础配置，用于格式化 Vue3
- dylanjs/react: 继承基础配置，用于格式化 React