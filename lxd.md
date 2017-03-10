
# Install and configure LXD
## Prepare for ZFS and network bridging
Recommended for lxd and bridge work
```
host$ sudo apt install zfsutils-linux bridge-utils ssh-import-id
```

## Install LXD using snaps
Recent recommendation from https://insights.ubuntu.com/2017/03/06/run-your-own-lxd-demo-server/
Possibly better than the PPA now that snapd is maintained on all Ubuntu LTS versions.

```
host$ sudo snap install lxd
host$ sudo lxd init
```
LXD init will ask a lot of questions, answers should be
* Use ZFS,
* Create a ZFA pool named lxd,
* No to existing block device and use a new one with defaut size,
* Make containers available over the network,
* Default answers for all the remaining questions

## Preload LXD configuration to have your Github key use for SSH auth
Reference at http://blog.dustinkirkland.com/2017/02/howto-automatically-import-your-public.html
```
host$ lxc profile edit default
```
Copy the following in the editor to replace the existing profile configuration.
```
config:
  user.vendor-data: |
    #cloud-config
    users:
      - name: root
        ssh-import-id: gh:ajeans
        shell: /bin/bash
description: Default LXD profile with GH key
devices:
  eth0:
    nictype: bridged
    parent: lxdbr0
    type: nic
name: default
usedby: []

```

# Launch an Ubuntu container in LXD

```
host$ lxc launch ubuntu: xenial
```
Note that the first choice was to use Ubuntu core with "lxc launch images:ubuntu-core/16 ubuntu-core" but it is rather limited for what we want to do.

Check that the container is running and has an IPv4 address with
```
host$ lxc list
```
Expected output is something like
```
+-------------+---------+---------------------+----------------------------------------------+------------+-----------+
|    NAME     |  STATE  |        IPV4         |                     IPV6                     |    TYPE    | SNAPSHOTS |
+-------------+---------+---------------------+----------------------------------------------+------------+-----------+
| ubuntu-core | STOPPED |                     |                                              | PERSISTENT | 0         |
+-------------+---------+---------------------+----------------------------------------------+------------+-----------+
| xenial      | RUNNING | 10.103.175.5 (eth0) | fd42:ddee:5698:346b:216:3eff:fed4:dcb (eth0) | PERSISTENT | 0         |
+-------------+---------+---------------------+----------------------------------------------+------------+-----------+
```

Note: if network doesn't work, then you have to mess with the lxdbr0 bridge.
My recommendation is to:
- Uninstall LXD
- Remove the ZFS pool
- Delete the lxdbr0 bridge
And start from scratch again.

# Configure the Ubuntu container

```
host$ ssh root@10.103.175.5
xenial$ sudo apt install apache2
xenial$ mv /var/www/html/index.html /var/www/html/index.html.bak
xenial$ exit
```

# Sandbox-web onto the container

Deploy it
```
host$ cd sandbox-web
host$ ng build --prod
host$ scp dist/* root@10.103.175.5:/var/www/html
```

Test that it is correctly served by HTTPD
```
curl http://10.103.175.5
```

# TODO
We need to make the httpd server handle properly HTML5 routing rather than give 404 on refreshes and bookmarks.
https://ngmilk.rocks/2015/03/09/angularjs-html5-mode-or-pretty-urls-on-apache-using-htaccess/
http://readystate4.com/2012/05/17/nginx-and-apache-rewrite-to-support-html5-pushstate/
TODO find a nice redirection in HTTPD to make it all work
