import {Vector} from '../src/Vector.js';

describe('Vector', function() {
    var vector1, vector2;
  
    beforeEach(function() {
      vector1 = new Vector(2, 3);
      vector2 = new Vector(4, 5);
    });
  
    it('should create a new Vector instance', function() {
      expect(vector1 instanceof Vector).toBe(true);
      expect(vector1.x).toBe(2);
      expect(vector1.y).toBe(3);
    });
  
    it('should add two vectors', function() {
      var result = vector1.add(vector2);
      expect(result instanceof Vector).toBe(true);
      expect(result.x).toBe(6);
      expect(result.y).toBe(8);
    });
  
    it('should subtract two vectors', function() {
      var result = vector1.subtract(vector2);
      expect(result instanceof Vector).toBe(true);
      expect(result.x).toBe(-2);
      expect(result.y).toBe(-2);
    });
  
    it('should multiply a vector by a scalar', function() {
      var result = vector1.multiply(2);
      expect(result instanceof Vector).toBe(true);
      expect(result.x).toBe(4);
      expect(result.y).toBe(6);
    });
  
    it('should calculate the length of a vector', function() {
      var result = vector1.abs();
      expect(result).toBeCloseTo(3.6055, 4);
    });
  
    it('should calculate the unit vector', function() {
      var result = vector1.unit();
      expect(result instanceof Vector).toBe(true);
      expect(result.x).toBeCloseTo(0.5547, 4);
      expect(result.y).toBeCloseTo(0.8321, 4);
    });
  
    it('should calculate the direction angle', function() {
      var result = vector1.direction();
      expect(result).toBeCloseTo(0.9828, 4);
    });
  });
