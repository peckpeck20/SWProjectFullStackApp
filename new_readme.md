# Readme

## Back end

### Packages used

The back end uses MariaDB as our database and uses Node.js, Knex.js and Express.js to run the backend

- Express.js to handle routing
- Knex.js for parsing and using SQL commands on the database in the backend
- Node.js is the runtime enviroment for our backend

### Folder structure
back_end
\-------------------------------------
api -> Contains files for individual API actions
database -> contains file with information to logging into and connecting with external SQL database
Entry point for back end is index.js
(Start backend with npm start or node index.js)


## Front end

### Packages used

The front end is running React.js, React Redux, Material UI, React Table, React Router

- React.js is the main one that all the others extend. handles dynamic refreshing of the UI
- Material UI defines the styling of components (including DatePicker)
- React Table is a component that handles the rendering of data in a table with filtering and pagination
- Redux (React Redux) handles the state, localizing everything in one store instead of states spread out other multiple components
- React Router handles routing between the different pages of the app
- Axios handles GET, POST, DELETE requests
- Redux Form, for using forms with Redux state handling

### Folder structure
front_end
\---------------------------------------------------------
actions -> all redux actions stored here
components -> Contains all the React components
photo -> contains image files
reducers -> Contains Redux reducer files
entry point for front end is index.js
(Start project with npm start or node index.js)
