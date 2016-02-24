# leeNews
A web app for learning, based on Meteor!
From the learning resources：http://wiki.jikexueyuan.com/project/discover-meteor/startup.html

Note:If there is an error "the check is not defined in meteor...", in the terminal, please input the following instructions: 
meteor add the check

Here's why:
In Meteor version prior to v1.2, a core package called meteor-platform used to export some symbols, including check.
Since v1.2, this is no longer the case and those symbols are no longer available via the platform, but using dedicated packages instead.
It is likely that one of the packages that you are using (or your app code itself) is using check (probably in one of its methods) without declaring it as a dependency.
Until the package maintainers update the dependency, you should be able to overcome the error by adding check as a top-level dependency:
$ meteor add check
If you identify which package is causing the issue, you can report it on GitHub, or fork the package yourself, add the missing dependencies and submit a pull-request.
