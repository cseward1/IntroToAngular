// create a controller for displaying, creating, and deleting Todo items
// the array is empty until we have to pass in dependencies
var app = angular.module("TodoApp", []);

// create a controller for displaying, creating, and deleting Todo items
// pass in what you will be using(usually just scope)
app.controller("TodoCtrl", function ($scope, $http) {
    $scope.title = "Welcome to your task list";
    $scope.macaroni = ""
    //   array 
        $scope.todos = [
          { name: "Mow the lawn", complete: "incomplete" },
          { name: "Cut the grass", complete: "complete" },
          { name: "Kill the ants", complete: "incomplete" },
          { name: "Trim the weeds", complete: "complete" }
        ];
    
      $scope.killTodo = function(todo) {
          console.log("Button is working")
        // Do you see the PFM here of full object comparison?
        var todoIndex = $scope.todos.indexOf(todo);
      
        if (todoIndex >= 0) {
            //.splice is moving something from the array and because it moving it from the array its automatically removing it from the array
          $scope.todos.splice(todoIndex, 1);
        }
    };

        $http
        .get("https://socks.firebaseio.com/songs/.json")
        .then(
            function(firebaseObjectOfObjects) {
                for (let songId in firebaseObjectOfObjects) {
                    console.log(firebaseObjectOfObjects[songId])
                }
            }
        )
      
    });
    //   indexOf - it gives you the index number