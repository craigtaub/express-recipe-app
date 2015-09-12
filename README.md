# Node.js Express Recipe app

Basic Search list and item page.

See features under `/features`. They include:

    filter by name, recipe or basic ingredients
    filter gives error message if no search result
    item page per recipe with full ingredients
    item error page if no recipe exists

Setup

    npm install

Test the application

    npm test

Run the application

    npm start

To view the app go to `http://localhost:3030/`

Build the app in Docker container

    docker build -t my/recipe-app .

Expose it inside your DOCKER_HOST

    docker run -p 3030:3030 -d my/recipe-app
