# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Runing the project

If you want to run the project locally first install the npm packages

# JSON server
This project has also integrated in a separated folder an JSON server feature in order to mimic an API in order to start it you can run you'll need to install first the node modules and then run the server
```
cd JsonServer & npm install
```
then start the project
```
npm run dev
```

First
```
cd JsonServer & npm install
```
and then start the server
```
json-server --watch RecipesDB.json --port 8000
```