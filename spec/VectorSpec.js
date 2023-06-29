import {Vector} from '../src/Vector.js';

describe('Vector', function () {
  let a, b;

  beforeEach(function () {
    a = new Vector(1, 2);
    b = Vector.of(2, 0.5);
  });

  it('should add vectors correctly', function () {
    const sum = a.add(b);
    expect(sum.x).toBe(3);
    expect(sum.y).toBe(2.5);
  });

  it('should subtract vectors correctly', function () {
    const difference = a.subtract(b);
    expect(difference.x).toBe(-1);
    expect(difference.y).toBe(1.5);
  });

  it('should multiply by scalar correctly', function () {
    const scalar = 2;
    const multiplied = a.multiply(scalar);
    expect(multiplied.x).toBe(2);
    expect(multiplied.y).toBe(4);
  });

  it('should calculate vector length correctly', function () {
    const sum = a.add(b);
    const abs = sum.abs();
    expect(abs).toBeCloseTo(3.905124837953327);
  });

  it('should calculate unit vector correctly', function () {
    const sum = a.add(b);
    const unit = sum.unit();
    expect(unit.x).toBeCloseTo(0.7682212795973759);
    expect(unit.y).toBeCloseTo(0.6401843996644799);
  });

  it('should calculate direction angle correctly', function () {
    const sum = a.add(b);
    const direction = sum.direction();
    expect(direction).toBeCloseTo(0.6947382761967033);
  });
});
