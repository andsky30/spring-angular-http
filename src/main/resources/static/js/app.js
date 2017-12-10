angular.module('app', [])
    .controller('ProductController', function($http) {
        var vm = this;
        function refreshData() {
            $http.get('api/products')
                .then(function success(response) {
                    vm.products = response.data;
                }, function error(response) {
                    console.log('API error ' + response.status);
                });
        }

        vm.addProduct = function(product) {
            $http.post('api/products', product)
                .then(function success(response) {
                    refreshData();
                    vm.product = {};
                }, function error(response) {
                    console.log('Data not saved ' + product);
                });
        }
        vm.appName = 'Product Manager';
        refreshData();
    });