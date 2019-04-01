# INFO30005 2019 workshop week 5
Sample solution

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




## Q and A
#### Why environment variables?
To avoid committing secrets such as API keys into your repo.
You wouldn't want people to find out this info if you make your repo public.

#### What is `() => {}`?
It is an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which is a alternative to regular function expressions.
It can be more compact than writing `function`.

#### What does `process.env.PORT || 3000` do?
`||` is [logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).
If the left side (`process.env.PORT`) evaluates to something falsy (such as `undefined`), then the entire expression evaluates to the right side (`3000`).

Use this if you want to have a value with fallback to another value if the first value was `undefined`.
