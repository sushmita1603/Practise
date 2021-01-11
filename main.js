/*

$(document).ready(function(){

    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    
    var c;
    for(var x=25; x<400; x+=50) {
      for(var y=25; y<400; y+=50){ 
      	c = Shape.Circle(x, y, 20); 
      	c.fillColor = 'green';
      } 
   }
   

    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello World';

    
    tool.onMouseDown = function(event){
    var c= Shape.Circle(event.point.x, event.point.y, 20);
   	c.fillColor = 'green';
   }

   paper.view.draw();

   let str = 45;
   const room_temp = 21.5, room1_temp = 33;

   let currentTemp : 30.2;
   const message = `The current temp is ${currentTemp}\u00b0C`;


    console.log("main.js is loaded")


})
*/

// Create Object

let person = {
  name :'Sushmita',
  eyeColor :'Black',
  age : 36,
 updateAge : function(){
    return ++person.age();
 }

}

// Create Array

var countries = ["India","UnitedStates","UnikedKingdom","Singapore"];
console.log(countries);

var states = new Array("California", "Arizona","Utah","Texas");
console.log(states);



