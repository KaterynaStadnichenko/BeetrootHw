"use strict";

var radius = prompt("pls put radius in sm");
var radiusConv = parseFloat(radius);
console.log(radiusConv);

if (radiusConv) {
  var area = Math.PI * Math.pow(radiusConv, 2);
  alert(area);
} //π r²