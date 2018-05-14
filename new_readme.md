# Readme

## Back end

### Packages used

The back end uses MariaDB as our database and uses Node.js, Knex.js and Express.js to run the backend

- Express.js to handle routing
- Knex.js for parsing and using SQL commands on the database in the backend
- Node.js is the runtime enviroment for our backend

## Front end

### Packages used

The front end is running React.js, React Redux, Material UI, React Table, React Router

- React.js is the main one that all the others extend. handles dynamic refreshing of the UI
- Material UI defines the styling of components
- React Table is a component that handles the rendering of data in a table with filtering and pagination
- Redux handles the state, localizing everything in one store instead of states spread out other multiple components
- React Router handles routing between the different pages of the app