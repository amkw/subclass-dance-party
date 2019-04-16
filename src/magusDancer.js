var MagusDancer = function(top, left, timeBetweenSteps) {
  MarleDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="magus" src="gifs/magus.gif">');
  this.step();
};

MagusDancer.prototype = Object.create(MarleDancer.prototype);
MagusDancer.prototype.constructor = MagusDancer;