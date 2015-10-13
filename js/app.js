
var myApp = angular.module('myApp', [ 'ngMaterial' ]);

myApp.controller('AppController', function ($scope) {

    $scope.atributo = 'GDG editado';

    this.atributo = 'GDG ALIAS';

    $scope.produtos = [
        {
            descricao: 'Camiseta',
            preco: 200
        },
        {
            descricao: 'Sapato',
            preco: 300
        }
    ];

    $scope.valorDeData = new Date();

    $scope.minhaFlag = true;
});


myApp.directive('listaProdutos', function () {
    return {
        restrict: 'E',
        scope: {
            produtos: '='
        },
        template:   '<md-list> ' +
                        '<md-list-item ng-repeat="produto in produtos"> {{ produto.descricao }} - {{ produto.preco | currency }} </md-list-item>' +
                    '</md-list>',
        controller: function ($scope) {
        }
    }
});