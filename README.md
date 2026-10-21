# 📝 Notes Demo

A full-stack notes demo app: a React + Vite frontend and a Node.js backend, deployed together on [Diploi](https://diploi.com). [Add one sentence on what users can do with it.]

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

## ✨ Features

- [Create, edit and delete notes]

## 🗂️ Project structure

```
diploi-notes-demo/
├── react-vite/        # Frontend: React + Vite
├── node/              # Backend: Node.js
├── .github/workflows/ # GitHub Actions workflows
└── diploi.yaml        # Diploi configuration (components and deployment)
```

## 🛠️ Tech stack

| Part | Technology |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js (official `node` Docker image) |
| Database |
| Containers | Docker |
| Hosting | Diploi |

## 🚀 Run locally

Start the backend and the frontend in two terminals.

```bash
git clone https://github.com/IchrakMansour/diploi-notes-demo.git
cd diploi-notes-demo
```

**Backend**

```bash
cd node
npm install
npm run dev
```

**Frontend**

```bash
cd react-vite
npm install
npm run dev
```

Then open the local URL shown in the frontend terminal (Vite uses `http://localhost:5173` by default).

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production version |
| `npm start` | Starts the backend in production (`node/`) |

## ☁️ Deployment

The app is deployed on Diploi, which runs both components from the `diploi.yaml` file.

- **Frontend** ([React + Vite component](https://diploi.com/component/react-vite)): built with `npm run build`, then the `/dist` folder is served as a static site with nginx.
- **Backend** ([Node.js component](https://diploi.com/component/node)): runs `npm install` and the build step when the image is created, then starts with `npm start`.

## 🔗 Links

- [React documentation](https://react.dev/)
- [Vite documentation](https://vite.dev/)
- [Hosting Node apps on Diploi](https://diploi.com/blog/hosting_node_apps)
- [Hosting React apps on Diploi](https://diploi.com/blog/hosting_react_apps)
