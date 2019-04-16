var MarleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="marle" src="gifs/marle.gif">');
  this.step();
};

MarleDancer.prototype = Object.create(Dancer.prototype);
MarleDancer.prototype.constructor = MarleDancer;

MarleDancer.prototype.step = function() {
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.setPosition(this.top, this.left);
};