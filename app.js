var app=angular.module("slider",['angular-carousel','ngMaterial']);

app.run(function($rootScope,Carousel){
   $rootScope.Carousel = Carousel;
   console.log($rootScope.Carousel)
})
