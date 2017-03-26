angular.module("SDA", ['ngResource'])
    .controller("usersCtrl", function ($scope, $resource) {

        // GET      -> /users/{id}
        // POST     -> /users
        // PUT      -> /users lub   PUT -> /users/{id}
        // DELETE   -> /users/{id}

        var Users = $resource("https://jsonplaceholder.typicode.com/users");

        $scope.users = Users.query(function (users) {
        }, function () {
            $scope.error = true;
        });

        $scope.loading = true;

        $scope.limit = 2;

        $scope.more = function () {
            $scope.limit = $scope.limit + 10
        };

        $scope.shouldBeShowMoreButton = function () {
            return $scope.users && $scope.limit < $scope.users.length;
        };

        $scope.remove = function (index) {
            $scope.users.splice(index, 1);
        };

        $scope.addUser = function () {
            $scope.users.push({
                username: $scope.newName,
                phone: $scope.newPhone
            });
            $scope.newName = "";
            $scope.newPhone = "";
        };
    })
    .controller("tabCtrl", function ($scope) {
        $scope.current = 1;

        $scope.changeTab = function (tab) {
            $scope.current = tab;
        };

        $scope.isCurrent = function (tab) {
            return tab === $scope.current;
        };
    });

