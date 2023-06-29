class Vector {
  /**
   * Creates a new Vector instance.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Creates a new Vector instance with the given coordinates.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   * @returns {Vector} The created Vector instance.
   */
  static of(x, y) {
    return new Vector(x, y);
  }

  /**
   * Adds the given vector to the current vector and returns the result as a new vector.
   * @param {Vector} vector - The vector to be added.
   * @returns {Vector} The resulting vector after addition.
   */
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  /**
   * Subtracts the given vector from the current vector and returns the result as a new vector.
   * @param {Vector} vector - The vector to be subtracted.
   * @returns {Vector} The resulting vector after subtraction.
   */
  subtract(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  /**
   * Multiplies the current vector by a scalar value and returns the result as a new vector.
   * @param {number} scalar - The scalar value to multiply by.
   * @returns {Vector} The resulting vector after multiplication.
   */
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  /**
   * Calculates the length (magnitude) of the current vector.
   * @returns {number} The length of the vector.
   */
  abs() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Calculates the unit vector (normalized vector) of the current vector.
   * @returns {Vector} The unit vector.
   */
  unit() {
    const length = this.abs();
    return new Vector(this.x / length, this.y / length);
  }

  /**
   * Calculates the direction angle of the current vector in radians.
   * @returns {number} The direction angle in radians.
   */
  direction() {
    return Math.atan2(this.y, this.x);
  }
}

