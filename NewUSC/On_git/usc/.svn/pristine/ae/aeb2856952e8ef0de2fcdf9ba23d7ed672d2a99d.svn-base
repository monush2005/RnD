(function(app) {
    'use strict';
    app.service('userTreeService', userTreeServiceFn);
    userTreeServiceFn.$inject = ['httpService', '$q', '$localStorage'];

    function userTreeServiceFn(httpService, $q, $localStorage) {
        var userTreeService = this;
        var masterUserTree = null;

        userTreeService.fetchUserTree = fetchUserTree;

        //gets a final trimmed tree for passed userid.
        function fetchUserTree(userId, isNewRedirect) {
            if(isNewRedirect)
                masterUserTree = null;
            return fetchAllUserTree().then((allTree) => {
                var isUserFoundInTree = trimParentTree(allTree, userId);
                if (!isUserFoundInTree)
                    allTree.selected = true;

                return allTree;
            })
        }

        //gets all unconstructed users from db,
        // constructs a tree out of them for super user, and resolves the same.
        // also caches during application runtime.
        function fetchAllUserTree() {
            if (masterUserTree)
                return $q.resolve(_.cloneDeep(masterUserTree));

            var payload = {
                userid: $localStorage.userInfo.userId //fetching complete tree below requesting user no 
                //matter which user was tree requested for
            }
            return httpService.post('fetchHierarchy', payload)
                .then((allUserTree) => {
                    var usersArray = groupAppsAndServices(allUserTree.usermasterdetails);
                    masterUserTree = new UserTreeNode(payload.userid, _.find(usersArray, { userid: payload.userid }).apps);
                    constructTree(usersArray, masterUserTree);
                    return _.cloneDeep(masterUserTree);
                });
        }

        //constructs a tree out of users array.
        //parent node is to be provided.
        function constructTree(inputArray, parentNode) {
            if (!inputArray.length)
                return;

            for (var i = 0; i < inputArray.length; i++) {
                if (inputArray[i].puserid == parentNode.userid) {
                    var newChild = new UserTreeNode(inputArray[i].userid, inputArray[i].apps)
                    parentNode.children.push(newChild);
                    inputArray.splice(i, 1);
                    i = -1;
                    constructTree(inputArray, newChild);
                }
            }
        }

        //trims the siblings of every user up the tree from
        //the point where param userid is found
        function trimParentTree(tree, userid) {
            for (var i = 0; i < tree.children.length; i++) {
                if (tree.children[i].userid == userid) {
                    var user = tree.children[i];
                    tree.children.length = 0;
                    tree.children.push(user);
                    user.selected = true;
                    return true;
                } else {
                    var isFound = trimParentTree(tree.children[i], userid);
                    if (isFound) {
                        var user = tree.children[i];
                        tree.children.length = 0;
                        tree.children.push(user);
                        return true;
                    }
                }
            }
        }

        //function to group apps and services allotted to user.
        //input is a repetitive array of users object with different 
        //apps and services.
        //output will be array of users object, with single object per user,
        //and apps and services grouped in users object itself.
        function groupAppsAndServices(usersArray) {
            return _(usersArray)
                .groupBy('userid')
                .map(function(singleUserArray) {
                    return _(singleUserArray)
                        .groupBy('appid')
                        .map(function(singleAppArray) {
                            return _(singleAppArray).reduce(function(acc, singleAppObj) {
                                acc = acc || singleAppObj;
                                acc.services = acc.services || [];
                                acc.services.push(singleAppObj.sername);
                                return acc;
                            }, null)
                        })
                        .reduce(function(acc, singleUserObj) {
                            acc = acc || singleUserObj;
                            acc.apps = acc.apps || [];
                            if (singleUserObj.appid)
                                acc.apps.push({
                                    appid: singleUserObj.appid,
                                    appname: singleUserObj.appname,
                                    services: singleUserObj.services.join(', ')
                                });
                            return acc;
                        }, null)
                })
                .value();
        }

        //constructor for new tree node
        function UserTreeNode(userid, apps) {
            this.userid = userid;
            this.apps = apps;
            this.children = [];
        }
    }
})(angular.module('selfcare'));
