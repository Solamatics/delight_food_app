var app = angular.module("myApp",[]);

app.controller("OrderFormController",function OrderFormController($scope){

    
    $scope.services = [
        {
            name: 'African Dishes',
            price: 500,
            active:true
        },{
            name: 'Stir Fry Pasta',
            price: 500,
            active:false
        },{
            name: 'Continental Dishes',
            price: 2000,
            active:false
        },{
            name: 'Snacks and Chicken',
            price: 500,
            active:false
        }
    ];

    $scope.toggleActive = function(s){
        s.active = !s.active;
    };


    $scope.total = function(){

        var total = 0;

        

        angular.forEach($scope.services, function(s){
            if (s.active){
                total+= s.price;
            }
        });

        return total;
    };
});