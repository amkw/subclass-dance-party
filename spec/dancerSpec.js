describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('stick', function () {
    it('should update location (top, left) to match another dancer if position is within 250px', function () {
      dancer = new Dancer(200, 200, 100);
      window.dancers.push(dancer);
      blinkyDancer = new BlinkyDancer(100, 100, 100);
      expect(blinkyDancer.top).to.be.equal(200);
    });
  });
});


describe('frogDancer', function () {

  var dancer, frogDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    frogDancer = new FrogDancer(10, 20, timeBetweenSteps);
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(frogDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should override Dancer step() method', function () {
    expect(frogDancer.step === dancer.step).to.be.false;
  });
});

describe('chronoDancer', function () {

  var dancer, chronoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    chronoDancer = new ChronoDancer(10, 20, timeBetweenSteps);
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(chronoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should override Dancer step() method', function () {
    expect(chronoDancer.step === dancer.step).to.be.false;
  });
});

describe('marleDancer', function () {

  var dancer, marleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    marleDancer = new MarleDancer(10, 20, timeBetweenSteps);
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(marleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should override Dancer step() method', function () {
    expect(marleDancer.step === dancer.step).to.be.false;
  });
});
