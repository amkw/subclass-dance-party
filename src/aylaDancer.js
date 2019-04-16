var AylaDancer = function(top, left, timeBetweenSteps) {
  MarleDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="ayla" src="gifs/ayla.gif">');
  this.step();
};

AylaDancer.prototype = Object.create(MarleDancer.prototype);
AylaDancer.prototype.constructor = AylaDancer;