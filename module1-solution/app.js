(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller( 'LunchCheckController', LunchCheckController );

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope)
  {

    $scope.checkDishes = function () {
      var dishes = $scope.lunchMenu;

      // there are no meals?!
      if ( !dishes ){
        $scope.message   = "Please enter data first";
        $scope.cssStatus = "red";
        console.log("fill in meals");
        return;
      }
      // let's get clean table before lunch
      dishes = dishes.split(",");
      dishes = cleanEmptyDish(dishes);

      // look if I'm overweight
      if ( dishes.length <= 3) {
        // that's ok
        $scope.message   = "Enjoy!";
        $scope.cssStatus = "green";
      } else {
        // mmm the man who eat too much
        $scope.message   = "Too much!";
        $scope.cssStatus = "red";

      }

      console.log(dishes);

    };
  }

  // look for valid dish. any bunch of chars that are not whitespaces.
  function cleanEmptyDish(dishes)
  {
    var newDishes = [];
    for (var i = 0; i < dishes.length; i++) {
       if (dishes[i].trim().length > 0) newDishes.push( dishes[i] );
    }
    return newDishes;
  }


})();
