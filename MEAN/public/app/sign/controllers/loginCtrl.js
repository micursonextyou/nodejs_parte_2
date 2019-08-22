angular.module('Teamapp').controller('loginCtrl', function($scope, $http, $state, toastF, Session){
	$scope.master = {};

	$scope.signin = function(){
		var usuario = {username : $scope.usuario.username, password : $scope.usuario.password};
		Session.logIn(usuario)
		.then(function (response){
			if (response.data.success) {
				toastF.success('Iniciaste sesión correctamente!');
				$state.go('app.dashboard');
			}else{
				toastF.error('Error de autenticación, verifica tus datos!');
				$scope.usuario = angular.copy($scope.master);
				$scope.form.$setPristine();
			}
		});
	}


	Session.isLogged()
	.then(function(response){
		var isLogged = response.data.isLogged;
		if (isLogged) {
			$state.go('app.dashboard');
		}
	});

});