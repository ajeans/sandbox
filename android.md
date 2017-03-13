
# Install Android
According to the https://guide.meteor.com/mobile.html#installing-prerequisite


## Install Android Studio
We use Ubuntu make to make it easy for us.
$ umake android

Once it is installed, launch Android Studio and see the first time wizard set up. Confirm that you want everything installed in a standard way and let it download a lot of stuff.

## Define where Android tooling is
Add the env variables:
$ vi ~/.profile
And append the following at the end of the file
export ANDROID_HOME="$HOME/Android/Sdk"
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

Note: .profile, and not .bash_profile as recommended in the documentation, see http://unix.stackexchange.com/questions/88106/why-doesnt-my-bash-profile-work as to wh .

## Create an Android Virtual Device:
Create a virtual device from inside Android Studio, as described here https://developer.android.com/studio/run/managing-avds.html
I chose Nexus5 with a Marshmallow image.

## Get bitten by Android SDK tools 25.3.0
Grr... Incompatibility
$ meteor add-platform android
...Explosion, Android tools and gradle not found...

See https://guide.meteor.com/mobile.html#installing-prerequisites and https://github.com/meteor/meteor/issues/8464

Check that we have the version with the problem (25.3.0+)
$ $ANDROID_HOME/tools/bin/sdkmanager --list | grep "SDK Tools"

If that is the case, then remove the current tools directory using sdkmanager
$ $ANDROID_HOME/tools/bin/sdkmanager --uninstall tools
And download an older tools zip (version 25.2.3) from https://developer.android.com/studio/index.html#downloads and unzip it into $ANDROID_HOME 
