# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Client
## Step 1 install React & vite

```bash
npm create vite .
```
```plaintext
select option React and JS script
```
```bash
npm install
npm run dev
```

## Step 2 install tailwind
https://tailwindcss.com/docs/installation/using-vite

```bash
npm install tailwindcss @tailwindcss/vite
```
/vite.config.js  edit as suggest from tailwind as above site
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()]
})
```
index.css update code
```js
@import "tailwindcss";
```
App.jsx test tailwind
```js
import React from 'react'

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Hello world!
      </h1>
      
    </div>
  )
}

export default App
```

## Step 3 install 
```bash
npm i react-router
```

## Step 4 install axios


## step 5 install sweetalert2


## Step 6 install react-hook-form
https://
```bash
npm install react-hook-form
```

## Step 7 install lucide 

```bash
npm install lucide-react
```

## Step 8 validate with Zod
```bash
npm install @hookform/resolvers
npm i zod
```

## step 7 Global state with Zustand
```bash
npm install zustand
```