# Web application based on Angular2

## Setup
Where we work with the project creation tutorial at https://angular.io/docs/ts/latest/cli-quickstart.html


### Angular setup and app creation

```shell
# nodejs-legacy and npm could be installed directly but are too old for angular-cli
# See http://stackoverflow.com/questions/42160699/getting-error-after-angular-cli-update 
# Install method sucks but is recommended by nodejs devs
# See http://askubuntu.com/questions/594656/how-to-install-the-latest-versions-of-nodejs-and-npm-for-ubuntu-14-04-lts
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install nodejs 
sudo npm install -g @angular/cli
ng new sandbox-web
```

### App launch
Check that it works fine and displays "app works"
```shell
ng serve
curl http://localhost:4200
```

### App tests
We have end to end testing preconfigured, check it out.
```shell
# Make the included tests work fine on Ubuntu 16.04
# We need chrome installed and with an expected binary name...
# Or we should switch to Chromium which looks up the existing binary name, but we would need to mess with the karma.conf.js file
# See https://github.com/karma-runner/karma-chrome-launcher/blob/master/index.js
sudo apt install chromium-browser
sudo ln -s /usr/bin/chromium-browser /usr/bin/google-chrome
ng test --singleRun
```

## Development
Where we look at the more "Tour of Heroes" tutorial  https://angular.io/docs/ts/latest/tutorial

### Create additional components for our HappyTri use case.
```shell
ng g component product.component
ng g component scan.component
```
