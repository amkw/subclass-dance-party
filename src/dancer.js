// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUpDancers = function(){
  // Move dancers to same height in middle of page
  this.$node.animate({'top': $('body').height()/2});

  // Space dancers evenly across width of page
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].$node.animate({ 'left': $('body').width() / window.dancers.length*i});
  }
};

Dancer.prototype.breakOut = function() {
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.$node.animate({ 'top': this.top, 'left': this.left});
};

