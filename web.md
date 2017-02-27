# Work with the following tutorial
https://angular.io/docs/ts/latest/cli-quickstart.html

# nodejs-legacy and npm could be installed directly but are too old for angular-cli
# See http://stackoverflow.com/questions/42160699/getting-error-after-angular-cli-update 
# Install method sucks but is recommended by nodejs devs
# See http://askubuntu.com/questions/594656/how-to-install-the-latest-versions-of-nodejs-and-npm-for-ubuntu-14-04-lts
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install nodejs 
sudo npm install -g @angular/cli
ng new sandbox-web 

# Check that it works fine
ng serve
curl http://localhost:4200

# Make the included tests work fine on Ubuntu 16.04
# We need chrome installed and with an expected binary name...
# Or we should switch to Chromium which looks up the existing binary name, but we would need to mess with the karma.conf.js file
# See https://github.com/karma-runner/karma-chrome-launcher/blob/master/index.js
sudo apt install chromium-browser
sudo ln -s /usr/bin/chromium-browser /usr/bin/google-chrome
ng test --singleRun

