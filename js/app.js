(function(){
var app=angular.module("eatlo",[]);

 

  app.directive('socialMedia' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/socialMediaFile.html'
    } ;
  });


app.controller('SocialMediaController',function(){
    this.media=socialMediaIcons;
  });

var socialMediaIcons = [

    {	
		name:'facebook',
		src : '../images/facebook.png',
		alt:'Facebook',
		href:'https://www.facebook.com/eatloapp'
	},
	{	
		name:'twitter',
		src : '../images/twitter.png',
		alt:'Twitter',
		href:'https://www.twitter.com/eatloapp'
	},
	{	
		name:'Android',
		src : '../images/android.png',
		alt:'Android',
		href:'http://www.eatloapp.com/app'
	},
	{	name:'Apple',
		src : '../images/apple.png',
		alt:'Apple',
		href:'http://www.eatloapp.com/app'
	}
	]


 app.directive('navFooter' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/navFooter.html'
    } ;
  });

app.directive('chooseLocation' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/chooseLocation.html'
    } ;
  });
app.directive('chooseDishes' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/chooseDishes.html'
    } ;
  });
app.directive('placeOrder' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/placeorder.html'
    } ;
  });
app.directive('history' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/history.html'
    } ;
  });

app.directive('mainContent' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/mainContent.html'
    } ;
  });
app.controller('PanelController',function(){
   
	this.tab=1;
    this.setTab = function(setTab){
    	
    	this.tab=setTab;
    };

    this.isSelected = function(checktab){
    	return this.tab===checktab;
    };

    this.getTab = function (){

    	return this.tab;
    }

  });

})();
