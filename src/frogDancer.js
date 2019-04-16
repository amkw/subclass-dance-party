var FrogDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="frog" src="gifs/frog.gif">');
  this.step();
};

FrogDancer.prototype = Object.create(Dancer.prototype);
FrogDancer.prototype.constructor = FrogDancer;

FrogDancer.prototype.step = function() {
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.setPosition(this.top, this.left);
};