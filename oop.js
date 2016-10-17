//As a real-world example, consider the google maps v3 api. Let's implement a new OverlayView://

// implement an OverlayView //
MyOverlay.prototype = new google.maps.OverlayView();


// the "constructor" function //
function MyOverlay(position, node, map) {
 // set the parameters //
 this.position = position;
 this.node = node;
 this.map = map;
 this.setMap(this.map);
}

// required onAdd function //
MyOverlay.prototype.onAdd = function() {
 // observe the getPanes function inherited from OverlayView //
 var panes = this.getPanes();
 // bla bla //
}

// required draw function //
MyOverlay.prototype.draw = function() {
 // bla bla //
}
// .. other functions //

// now instantiate an object //
var instance = new MyOverlay(position, node, map);