var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this.stick();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.stick = function (event) {
  var distance = 0;
  var blinkyTop = this.top;
  var blinkyLeft = this.left;
  var futureTop = 0;
  var futureLeft = 0;
  if (window.dancers.length > 1) {
    for (var i = 0; i < window.dancers.length; i++) {
      var otherDancerTop = window.dancers[i].top;
      var otherDancerLeft = window.dancers[i].left;
      var newDistance = Math.sqrt(Math.pow((blinkyTop - otherDancerTop), 2) + Math.pow((blinkyLeft - otherDancerLeft), 2));
      if (newDistance > distance) { //find longest distance
        distance = newDistance;
        futureTop = otherDancerTop;
        futureLeft = otherDancerLeft;
      }
    }
    this.setPosition(futureTop, futureLeft);
  }
};