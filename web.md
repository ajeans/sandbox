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
