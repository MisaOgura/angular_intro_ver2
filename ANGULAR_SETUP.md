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

  From here on, whenever you might need to add `sudo` to complete tasks, it is indicated in parentheses like so : `$ (sudo)`. Always worth giving a shot if your terminal is giving you errors related to permission!

  If bower is installed successfully, you will see something like below printed out in the terminal:

  ```
  /usr/local/bin/bower -> /usr/local/lib/node_modules/bower/bin/bower
bower@1.7.9 /usr/local/lib/node_modules/bower
```

### 3. Add `bower` to the dev environment

  If you had to use `sudo` to install bower in step 2, you will most likely have to use `sudo` in this step as well.

  `$ (sudo) npm install bower --save-dev`

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

### 5. Install Protractor

  Install Protractor globally :

  `$ (sudo) npm install protractor -g`

  This will install two command line tools, `protractor` and `webdriver-manager`. Try running `protractor --version` to make sure it's installed and working property.

  The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with :

  `$ (sudo) webdriver-manager update`

  This command will download and update selenium-server standalone and chromedriver, which are necessary for Protractor to open a browser and run tests.

  If the operation stops and does not complete, `ctrl + C` to quit the operation. It means that either or both files were not downloaded correctly.

  Try and start up the server with :

  `$ webdriver-manager start`

  If there is indeed a problem, it will tell you where things went wrong like below:

  ```
  Error: Invalid or corrupt jarfile /usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar

  ```

  In this case the problem lies in selenium-server-standalone file.

  First, you need to delete the corrupted file :

  `$ (sudo) rm /usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar`

  Then visit to the npm official selenium release page (http://selenium-release.storage.googleapis.com/index.html) to manually download the preferred version (I recommend grabbing the version `webdriver-manager` was initially trying to download. i.e. 2.52.0 in above example).

  Once downloaded, move the file to the appropriate directory : `/usr/local/lib/node_modules/protractor/selenium/`

  Repeat the similar procedure if you have a problem also in chromedriver.

  Then finally start up the server again with:

  `$ webdriver-manager start`

### Resources
- npm documentation :
  https://docs.npmjs.com/

- Interactive `package.json` guide : http://browsenpm.org/package.json

- Video - Introduction to Bower (~3min) : https://egghead.io/lessons/bower-introduction-and-setup

- selenium-webdriver package : https://www.npmjs.com/package/selenium-webdriver
