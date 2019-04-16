var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.stick();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.stick = function (event) {
  var blinkyTop = this.top;
  var blinkyLeft = this.left;
  if (window.dancers.length !== undefined) {
    for (var i = 0; i < window.dancers.length; i++) {
      var otherDancerTop = window.dancers[i].top;
      var otherDancerLeft = window.dancers[i].left;
      var newDistance = Math.sqrt(Math.pow((blinkyTop - otherDancerTop), 2) + Math.pow((blinkyLeft - otherDancerLeft), 2));
      if (newDistance < 250) {
        this.top = otherDancerTop;
        this.left = otherDancerLeft;
        this.$node.animate({ 'top': this.top, 'left': this.left });
      }
    }
  }
};
