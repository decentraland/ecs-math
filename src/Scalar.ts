/**
 * Scalar computation library
 * @public
 */
export namespace Scalar {
  /**
   * Two pi constants convenient for computation.
   */
  export const TwoPi: number = Math.PI * 2

  /**
   * Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
   * @param a - number
   * @param b - number
   * @param epsilon - (default = 1.401298E-45)
   * @returns true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
   */
  export function withinEpsilon(
    a: number,
    b: number,
    epsilon: number = 1.401298e-45
  ): boolean {
    const num = a - b
    return -epsilon <= num && num <= epsilon
  }

  /**
   * Returns a string : the upper case translation of the number i to hexadecimal.
   * @param i - number
   * @returns the upper case translation of the number i to hexadecimal.
   */
  export function toHex(i: number): string {
    const str = i.toString(16)

    if (i <= 15) {
      return ('0' + str).toUpperCase()
    }

    return str.toUpperCase()
  }

  /**
   * Returns -1 if value is negative and +1 is value is positive.
   * @param _value - the value
   * @returns the value itself if it's equal to zero.
   */
  export function sign(value: number): number {
    const _value = +value // convert to a number

    if (_value === 0 || isNaN(_value)) {
      return _value
    }

    return _value > 0 ? 1 : -1
  }

  /**
   * Returns the value itself if it's between min and max.
   * Returns min if the value is lower than min.
   * Returns max if the value is greater than max.
   * @param value - the value to clmap
   * @param min - the min value to clamp to (default: 0)
   * @param max - the max value to clamp to (default: 1)
   * @returns the clamped value
   */
  export function clamp(value: number, min = 0, max = 1): number {
    return Math.min(max, Math.max(min, value))
  }

  /**
   * the log2 of value.
   * @param value - the value to compute log2 of
   * @returns the log2 of value.
   */
  export function log2(value: number): number {
    return Math.log(value) * Math.LOG2E
  }

  /**
   * Loops the value, so that it is never larger than length and never smaller than 0.
   *
   * This is similar to the modulo operator but it works with floating point numbers.
   * For example, using 3.0 for t and 2.5 for length, the result would be 0.5.
   * With t = 5 and length = 2.5, the result would be 0.0.
   * Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator
   * @param value - the value
   * @param length - the length
   * @returns the looped value
   */
  export function repeat(value: number, length: number): number {
    return value - Math.floor(value / length) * length
  }

  /**
   * Normalize the value between 0.0 and 1.0 using min and max values
   * @param value - value to normalize
   * @param min - max to normalize between
   * @param max - min to normalize between
   * @returns the normalized value
   */
  export function normalize(value: number, min: number, max: number): number {
    return (value - min) / (max - min)
  }

  /**
   * Denormalize the value from 0.0 and 1.0 using min and max values
   * @param normalized - value to denormalize
   * @param min - max to denormalize between
   * @param max - min to denormalize between
   * @returns the denormalized value
   */
  export function denormalize(
    normalized: number,
    min: number,
    max: number
  ): number {
    return normalized * (max - min) + min
  }

  /**
   * Calculates the shortest difference between two given angles given in degrees.
   * @param current - current angle in degrees
   * @param target - target angle in degrees
   * @returns the delta
   */
  export function deltaAngle(current: number, target: number): number {
    let num: number = repeat(target - current, 360.0)
    if (num > 180.0) {
      num -= 360.0
    }
    return num
  }

  /**
   * PingPongs the value t, so that it is never larger than length and never smaller than 0.
   * @param tx - value
   * @param length - length
   * @returns The returned value will move back and forth between 0 and length
   */
  export function pingPong(tx: number, length: number): number {
    const t: number = repeat(tx, length * 2.0)
    return length - Math.abs(t - length)
  }

  /**
   * Interpolates between min and max with smoothing at the limits.
   *
   * This export function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up
   * from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.
   * @param from - from
   * @param to - to
   * @param tx - value
   * @returns the smooth stepped value
   */
  export function smoothStep(from: number, to: number, tx: number): number {
    let t: number = clamp(tx)
    t = -2.0 * t * t * t + 3.0 * t * t
    return to * t + from * (1.0 - t)
  }

  /**
   * Moves a value current towards target.
   *
   * This is essentially the same as Mathf.Lerp but instead the export function will ensure that the speed never exceeds maxDelta.
   * Negative values of maxDelta pushes the value away from target.
   * @param current - current value
   * @param target - target value
   * @param maxDelta - max distance to move
   * @returns resulting value
   */
  export function moveTowards(
    current: number,
    target: number,
    maxDelta: number
  ): number {
    let result: number = 0
    if (Math.abs(target - current) <= maxDelta) {
      result = target
    } else {
      result = current + sign(target - current) * maxDelta
    }
    return result
  }

  /**
   * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
   *
   * Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta
   *  are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.
   * @param current - current value
   * @param target - target value
   * @param maxDelta - max distance to move
   * @returns resulting angle
   */
  export function moveTowardsAngle(
    current: number,
    target: number,
    maxDelta: number
  ): number {
    const num: number = deltaAngle(current, target)
    let result: number = 0
    if (-maxDelta < num && num < maxDelta) {
      result = target
    } else {
      result = moveTowards(current, current + num, maxDelta)
    }
    return result
  }

  /**
   * Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar
   * @param start - start value
   * @param end - target value
   * @param amount - amount to lerp between
   * @returns the lerped value
   */
  export function lerp(start: number, end: number, amount: number): number {
    return start + (end - start) * amount
  }

  /**
   * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
   * The parameter t is clamped to the range [0, 1]. Variables a and b are assumed to be in degrees.
   * @param start - start value
   * @param end - target value
   * @param amount - amount to lerp between
   * @returns the lerped value
   */
  export function lerpAngle(
    start: number,
    end: number,
    amount: number
  ): number {
    let num: number = repeat(end - start, 360.0)
    if (num > 180.0) {
      num -= 360.0
    }
    return start + num * clamp(amount)
  }

  /**
   * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
   * @param a - start value
   * @param b - target value
   * @param value - value between a and b
   * @returns the inverseLerp value
   */
  export function inverseLerp(a: number, b: number, value: number): number {
    let result: number = 0
    if (a !== b) {
      result = clamp((value - a) / (b - a))
    } else {
      result = 0.0
    }
    return result
  }

  /**
   * Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".
   * {@link http://mathworld.wolfram.com/HermitePolynomial.html}
   * @param value1 - spline value
   * @param tangent1 - spline value
   * @param value2 - spline value
   * @param tangent2 - spline value
   * @param amount - input value
   * @returns hermite result
   */
  export function hermite(
    value1: number,
    tangent1: number,
    value2: number,
    tangent2: number,
    amount: number
  ): number {
    const squared = amount * amount
    const cubed = amount * squared
    const part1 = 2.0 * cubed - 3.0 * squared + 1.0
    const part2 = -2.0 * cubed + 3.0 * squared
    const part3 = cubed - 2.0 * squared + amount
    const part4 = cubed - squared

    return value1 * part1 + value2 * part2 + tangent1 * part3 + tangent2 * part4
  }

  /**
   * Returns a random float number between and min and max values
   * @param min - min value of random
   * @param max - max value of random
   * @returns random value
   */
  export function randomRange(min: number, max: number): number {
    if (min === max) {
      return min
    }
    return Math.random() * (max - min) + min
  }

  /**
   * This export function returns percentage of a number in a given range.
   *
   * RangeToPercent(40,20,60) will return 0.5 (50%)
   * RangeToPercent(34,0,100) will return 0.34 (34%)
   * @param num - to convert to percentage
   * @param min - min range
   * @param max - max range
   * @returns the percentage
   */
  export function rangeToPercent(
    num: number,
    min: number,
    max: number
  ): number {
    return (num - min) / (max - min)
  }

  /**
   * This export function returns number that corresponds to the percentage in a given range.
   *
   * PercentToRange(0.34,0,100) will return 34.
   * @param percent - to convert to number
   * @param min - min range
   * @param max - max range
   * @returns the number
   */
  export function percentToRange(
    percent: number,
    min: number,
    max: number
  ): number {
    return (max - min) * percent + min
  }

  /**
   * Returns the angle converted to equivalent value between -Math.PI and Math.PI radians.
   * @param angle - The angle to normalize in radian.
   * @returns The converted angle.
   */
  export function normalizeRadians(angle: number): number {
    // More precise but slower version kept for reference.
    // tslint:disable:no-commented-out-code
    /*
    // angle = angle % Tools.TwoPi;
    // angle = (angle + Tools.TwoPi) % Tools.TwoPi;

    //if (angle > Math.PI) {
    //	angle -= Tools.TwoPi;
    //}
      */

    return angle - TwoPi * Math.floor((angle + Math.PI) / TwoPi)
  }
}
