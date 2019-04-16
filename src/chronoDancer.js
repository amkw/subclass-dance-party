var ChronoDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="chrono" src="gifs/Chrono.gif">');
  this.step();
};

ChronoDancer.prototype = Object.create(Dancer.prototype);
ChronoDancer.prototype.constructor = ChronoDancer;

ChronoDancer.prototype.step = function() {
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.setPosition(this.top, this.left);
};