# React + TypeScript + Vite

🚌 Inflow – Bus Surveillance System
Inflow is a smart bus surveillance system designed to monitor real-time passenger inflow and crowd density, enabling efficient route optimization and better transit management. The platform provides a user-friendly web interface for both admins and users to access bus data, analyze crowd patterns, and make informed decisions to improve public transport efficiency.

This system is especially useful for modern urban transit hubs like GIFT City, Gujarat, where it can be integrated into the E-Bus ecosystem to enhance surveillance, reduce overcrowding, and support smart city infrastructure.

[![Watch the demo](https://youtu.be/5_c8sOi67d)](https://youtu.be/5_c8sOi67do)



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



🚀 Features

Real-time people counting using surveillance input

Crowd density monitoring for each bus

Route optimization based on occupancy trends

Web portal with role-based access (Admin/User)

Dashboard with data visualization and insights

🛠️ Tech Stack

Frontend: React / HTML-CSS-JS

Backend: Node.js / Flask / Django (based on your setup)

Database: MongoDB / Firebase / PostgreSQL

Additional: OpenCV / TensorFlow (for people counting)

📦 Use Cases

Urban transportation planning

Smart city integration (e.g., GIFT City, Gujarat)

E-Bus surveillance and management

Reducing overcrowding on public buses
