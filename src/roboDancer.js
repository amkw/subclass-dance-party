var RoboDancer = function(top, left, timeBetweenSteps) {
  MarleDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="robo" src="gifs/robo.gif">');
  this.step();
};

RoboDancer.prototype = Object.create(MarleDancer.prototype);
RoboDancer.prototype.constructor = RoboDancer;

