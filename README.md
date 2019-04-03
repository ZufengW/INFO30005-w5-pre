# INFO30005 2019 workshop week 5
Express + Mongoose. Sample solution

## Set up
Clone this repo.
```bash
git clone https://github.com/ZufengW/INFO30005-w5-pre.git
```
`cd` into the repo.
Then install dependencies.
```bash
npm install
```

## Running
Note that `db.js` uses the environment variable `DB`.
You need to provide a value for this if you want the database to work.

Here is one way to run the app and provide an environment variable.
(Replace `YOUR_MONGODB_URI` with your actual database connection string)
```bash
DB=YOUR_MONGODB_URI nodemon app
```

Then you can visit the website in your browser: http://localhost:3000/users/
(This is like sending GET requests)

Use a REST client such as [Postman](https://www.getpostman.com/) or Advanced REST Client to send http requests to your server.

## Structure
```
INFO30005-w5-pre
├─┬ controllers
│ └── controller.js     Defines callback functions for routes
├─┬ models              Mongoose stuff
│ ├── db.js             Set up connection to database
│ └── users.js          User model
├── node_modules        Contains dependencies. Don't commit this file.
├─┬ routes              
│ └── users.js          Defines CRUD routes for users
├── .gitignore          Specify things you don't want version-controlled
├── app.js              Runs the app
├── package.json        Contains info about the project
├── package-lock.json   Contains more info about dependencies (don't edit this directly)
└── README.md           Contains info about the project for humans to read
```


## Q and A
#### Why environment variables?
To avoid committing secrets such as API keys into your repo.
You wouldn't want people to find out this info if you make your repo public.

#### What is `() => {}`?
It is an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which is a alternative to regular function expressions.
It can be more compact than writing `function`.

#### Why `const`?
* [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) is for declaring constants.
Constants are block-scoped and can't be reassigned or redeclared.
Use `const` wherever possible because it's the most restrictive.
* `let` is like`const`, except they can be reassigned.
* Avoid using `var` because the variable can be reassigned, redeclared and it is *function* scope.

#### How do you get a database connection string?
One possibility is http://mongodb.com/atlas, where you can get a free-tier cluster in the cloud.

Summary of steps:
* Make an account
* Build a new cluster
  * (e.g. AWS, Singapore, M0 tier)
* Add a user to it with read and write access
* Whitelist your IP addresses (or allow global access, which is easier)
* Overview > Connect > Connect your application.
  * Copy the connection string.
  * Make sure to substitute in the user's password. The password needs to be [URL encoded](https://dochub.mongodb.org/core/atlas-url-encoding)
  
It's also possible to get MongoDB running locally on your machine.

#### What does `process.env.PORT || 3000` do?
`||` is [logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).
If the left side (`process.env.PORT`) evaluates to something falsy (such as `undefined`), then the entire expression evaluates to the right side (`3000`).

Use this if you want to have a value with fallback to another value if the first value was `undefined`.
