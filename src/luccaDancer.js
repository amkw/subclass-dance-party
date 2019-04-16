var LuccaDancer = function(top, left, timeBetweenSteps) {
  MarleDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="lucca" src="gifs/lucca.gif">');
  this.step();
};

LuccaDancer.prototype = Object.create(MarleDancer.prototype);
LuccaDancer.prototype.constructor = LuccaDancer;