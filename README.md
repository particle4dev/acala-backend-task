# acala-backend-task

## Getting Started

### Prerequisites

Following are the minimum tested versions for the tools and libraries you need for running the app:

- Nodejs: v14.17.5 or newer

- Yarn: v1.22.5 or newer

- Npm: v7.21.0 or newer

### Installing

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch main git@github.com:particle4dev/acala-backend-task.git
```

And install dependencies with yarn.

```bash
$ cd acala-backend-task
$ yarn install
```

To start the webapp in local, please run:

```bash
yarn dev
```

To build the app:

```bash
yarn build
```

### [How to deploy the app to heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

- Step 1: Installing Heroku CLI, [please follow the instructions](https://devcenter.heroku.com/articles/heroku-cli)

- Step 2: Logging in into Heroku
```bash
heroku login
```

- Step 3. Deploy your application to Heroku
```bash
heroku create
git push heroku main
```

- Step 4. To open the app in your browser, type `heroku open`.

- Step 5. View logs `heroku logs --tail`
