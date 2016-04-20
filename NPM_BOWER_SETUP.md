### 1. Create `package.json` file

  From the root directory run : `$ npm init`

  Choose the defaults by hitting return. This will create a `package.json` file where packages and their dependencies are listed. Much like `Gemfile` in Ruby.

### 2. Install `bower` globally

  Run : `$ npm install bower -g`

  You might get an error containing the following message:

  ```
  npm ERR! Error: EACCES: permission denied, rmdir '/usr/local/lib/node_modules/bower'
  ```

  In this case, you need to run the same command with `sudo` to bypass any permission restriction.

  `$ sudo npm install bower -g`

  If bower is installed successfully, you will see something like below printed out in the terminal:

  ```
  /usr/local/bin/bower -> /usr/local/lib/node_modules/bower/bin/bower
bower@1.7.9 /usr/local/lib/node_modules/bower
```

### 3. Add `bower` to the dev environment

  If you had to use `sudo` to install bower in step 2, you will most likely have to use `sudo` in this step as well.

  `$ npm install bower --save-dev`

  or

  `$ sudo npm install bower --save-dev`

  This will add bower to `package.json` with dev-only dependencies like below :

  ```
  "devDependencies": {
    "bower": "^1.7.9"
  }
  ```

### 4. Create `bower.json` file

  Your project is ready to create `bower.json`, which is a package manager optimised for front-end.

  Run: `$ bower init`

  Again, choose the defaults by hitting return. Now you can install packages in a similar way to installing Node packages. For example if you want to install jQuery:

  `$ bower install jquery --save`

  `--save` will add the package into your `bower.json` as a dependency. When anyone clones the repo, `$ bower install` command can be used much like `$ bundle install` to install the components in the correct directory.

### Resources
- npm documentation :
  https://docs.npmjs.com/

- Interactive `package.json` guide : http://browsenpm.org/package.json

- Video - Introduction to Bower (~3min) : https://egghead.io/lessons/bower-introduction-and-setup
