angular.module("TaskTrackerApp",['ngAnimate'])
.controller("TaskController",function ($scope,$http){
	//angular.element(document.getElementsByClassName("first")).innerHeight(angular.element(window).innerHeight());
	//angular.element(document.getElementsByClassName("second")).innerHeight(angular.element(window).innerHeight()/2);
	//angular.element(document.getElementsByClassName("third")).innerHeight(angular.element(window).innerHeight()/2);
	//todo: height setting

	$scope.dailyTasks = [];
	$http.get('/api/tasks').
	  	success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    var json = data.json;
		    json.forEach(function(task){
		    	console.log(task);
		    	$scope.dailyTasks.push(task);
		    });
	  	}).
	  	error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
		});

	$scope.isTodays = function(task){
		if(new Date().toISOString().slice(0, 10)==new Date(task.createddate).toISOString().slice(0, 10)){
			return true;
		}
		return false;
	}

	$scope.addTask = function(){
		var task  = {
			task : $scope.task,
			status : false,
			createddate : new Date()
		}
		$scope.dailyTasks.push(task);
		$http.post('/api/tasks/add', { data: task }).
	  	success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
			$scope.task = '';
	  	}).
	  	error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.

		});
	}

	$scope.deleteTask = function(task){
		var i = 0;
		var index = 0;
		$scope.dailyTasks.forEach(function(dtask){
			i++;
	    	if(task.id == dtask.id){
	    		index = i-1;
	    	}
		});

		//lets remove
		$http.delete('/api/tasks/remove/'+$scope.dailyTasks[index].id).
	  	success(function(data, status, headers, config) {
			$scope.dailyTasks.splice(index,1);
	  	});
	}

	$scope.done = function(task){
		task.status = true;
		task.finisheddate = new Date();
		$http.put('/api/tasks/finish/'+task.id ,  {data : task}).
	  	success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available

	  	}).
	  	error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.

		});
	}

	var formatDate = function (rdate){
		var today = new Date(rdate);
	    var dd = today.getDate();
	    var mm = today.getMonth()+1; //January is 0!
	    var yyyy = today.getFullYear();
	    if(dd<10){
	        dd='0'+dd
	    } 
	    if(mm<10){
	        mm='0'+mm
	    } 
	    var today = dd+'/'+mm+'/'+yyyy;
	}
})
.directive('fullheight', function($window) {
    return function (scope, element, attrs) {
        element.css("height",$window.innerHeight+"px");
    }
})
.directive('halfheight', function($window) {
    return function (scope, element, attrs) {
        element.css("height",($window.innerHeight/2)+"px");
    }
}).directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});/*
.filter('done', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});*/
