var Module = require('./module'),
  Event = require('./event'),
  utils = require('./utils'),
  _ = require('underscore');

describe('Module', function() {
  describe('type', function() {
    it('should be function', function() {
      expect(Module).toEqual(jasmine.any(Function));
    });
  });

  describe('creation', function() {
    it('should call initialize on instatiation', function() {
      spyOn(Module.prototype, 'initialize');

      var testModule = new Module(1, 2, 3);

      expect(Module.prototype.initialize).toHaveBeenCalledWith(1, 2, 3);
    });
  });

  describe('api', function() {
    describe('.initialize()', function() {
      it('should be defined', function() {
        expect(Module.prototype.initialize).toEqual(jasmine.any(Function));
      });
    });

    describe('.extend()', function() {
      it('should be defined', function() {
        expect(Module.extend).toBe(utils.extend);
      });
    });

    describe('Event api', function() {
      it('should be mixed in', function() {
        var moduleKeys = _.keys(Module.prototype),
          eventBusKeys = _.keys(Event.prototype);

        _.each(eventBusKeys, function(eventBusKey) {
          expect(moduleKeys).toContain(eventBusKey);
        });
      });
    });

  });
});