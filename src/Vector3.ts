import { DeepReadonly } from './types'
import { Quaternion } from './Quaternion'

/**
 * @public
 */
export namespace Vector3 {
  /**
   * @public
   */
  export type MutableVector3 = {
    y: number
    x: number
    z: number
  }

  /**
   * @public
   */
  export type ReadonlyVector3 = DeepReadonly<MutableVector3>

  /**
   * Creates a new Vector3 object from the given x, y, z (floats) coordinates.
   * @param x - defines the first coordinates (on X axis)
   * @param y - defines the second coordinates (on Y axis)
   * @param z - defines the third coordinates (on Z axis)
   */
  export function create(
    /**
     * Defines the first coordinates (on X axis)
     */
    x: number = 0,
    /**
     * Defines the second coordinates (on Y axis)
     */
    y: number = 0,
    /**
     * Defines the third coordinates (on Z axis)
     */
    z: number = 0
  ): MutableVector3 {
    return { x, y, z }
  }

  /**
   * Returns a new Vector3 as the result of the addition of the two given vectors.
   * @param vector1 - the first vector
   * @param vector2 - the second vector
   * @returns the resulting vector
   */
  export function add(
    vector1: ReadonlyVector3,
    vector2: ReadonlyVector3
  ): MutableVector3 {
    return {
      x: vector1.x + vector2.x,
      y: vector1.y + vector2.y,
      z: vector1.z + vector2.z
    }
  }

  /**
   * Returns a new Vector3 as the result of the substraction of the two given vectors.
   * @returns the resulting vector
   */
  export function subtract(
    minuend: ReadonlyVector3,
    subtrahend: ReadonlyVector3
  ): MutableVector3 {
    return {
      x: minuend.x - subtrahend.x,
      y: minuend.y - subtrahend.y,
      z: minuend.z - subtrahend.z
    }
  }

  /**
   * Returns a new Vector3 as the result of the substraction of the two given vectors.
   * @returns the resulting vector
   */
  export function subtractToRef(
    minuend: ReadonlyVector3,
    subtrahend: ReadonlyVector3,
    result: MutableVector3
  ): void {
    result.x = minuend.x - subtrahend.x
    result.y = minuend.y - subtrahend.y
    result.z = minuend.z - subtrahend.z
  }

  /**
   * Returns a new Vector3 with the other sign
   * @returns the resulting vector
   */
  export function opposite(value: ReadonlyVector3): MutableVector3 {
    return { x: -value.x, y: -value.y, z: -value.z }
  }

  /**
   * Copy source into dest
   *
   */
  export function copy(source: ReadonlyVector3, dest: MutableVector3): void {
    dest.x = source.x
    dest.x = source.x
    dest.x = source.x
  }

  /**
   * Returns a new Vector3 with the same value
   * @returns the resulting vector
   */
  export function clone(source: ReadonlyVector3): MutableVector3 {
    return { ...source }
  }

  // Properties
  /**
   * Gets the length of the Vector3
   * @returns the length of the Vecto3
   */
  export function length(vector: ReadonlyVector3): number {
    return Math.sqrt(
      vector.x * vector.x + vector.y * vector.y + vector.z * vector.z
    )
  }

  /**
   * Gets the squared length of the Vector3
   * @returns squared length of the Vector3
   */
  export function lengthSquared(vector: ReadonlyVector3): number {
    return vector.x * vector.x + vector.y * vector.y + vector.z * vector.z
  }

  /**
   * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
   * @param scale - defines the multiplier factor
   * @returns a new Vector3
   */
  export function scaleToRef(
    vector: ReadonlyVector3,
    scale: number,
    result: MutableVector3
  ): void {
    result.x = vector.x * scale
    result.y = vector.y * scale
    result.z = vector.z * scale
  }

  /**
   * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
   * @param scale - defines the multiplier factor
   * @returns a new Vector3
   */
  export function scale(
    vector: ReadonlyVector3,
    scale: number
  ): MutableVector3 {
    return create(vector.x * scale, vector.y * scale, vector.z * scale)
  }

  /**
   * Normalize the current Vector3 with the given input length.
   * Please note that this is an in place operation.
   * @param len - the length of the vector
   * @returns the current updated Vector3
   */
  export function normalizeFromLength(
    vector: ReadonlyVector3,
    len: number
  ): MutableVector3 {
    const result = create(0, 0, 0)
    normalizeFromLengthToRef(vector, len, result)
    return result
  }

  /**
   * Normalize the current Vector3 with the given input length.
   * Please note that this is an in place operation.
   * @param len - the length of the vector
   * @returns the current updated Vector3
   */
  export function normalizeFromLengthToRef(
    vector: ReadonlyVector3,
    len: number,
    result: MutableVector3
  ): void {
    if (len === 0 || len === 1.0) {
      copy(vector, result)
      return
    }

    result = scale(vector, 1.0 / len)
    scaleToRef(vector, 1.0 / len, result)
  }

  /**
   * Normalize the current Vector3.
   * Please note that this is an in place operation.
   * @returns the current updated Vector3
   */
  export function normalize(vector: ReadonlyVector3): MutableVector3 {
    return normalizeFromLength(vector, length(vector))
  }

  /**
   * Normalize the current Vector3.
   * Please note that this is an in place operation.
   * @returns the current updated Vector3
   */
  export function normalizeToRef(
    vector: ReadonlyVector3,
    result: MutableVector3
  ): void {
    normalizeFromLengthToRef(vector, length(vector), result)
  }

  /**
   * Returns the dot product (float) between the vectors "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @returns the dot product
   */
  export function dot(left: ReadonlyVector3, right: ReadonlyVector3): number {
    return left.x * right.x + left.y * right.y + left.z * right.z
  }

  /**
   * Rotates current Vector3 based on the given quaternion, but applies the rotation to target Vector3.
   * @param q - defines the Quaternion
   * @param result - defines the target Vector3
   * @returns the current Vector3
   */
  export function rotate(
    vector: ReadonlyVector3,
    q: Quaternion.ReadonlyQuaternion
  ): MutableVector3 {
    const { x, y, z } = vector
    const { x: qx, y: qy, z: qz, w: qw } = q

    // calculate quat * vector

    const ix = qw * x + qy * z - qz * y
    const iy = qw * y + qz * x - qx * z
    const iz = qw * z + qx * y - qy * x
    const iw = -qx * x - qy * y - qz * z

    // calculate result * inverse quat

    return {
      x: ix * qw + iw * -qx + iy * -qz - iz * -qy,
      y: iy * qw + iw * -qy + iz * -qx - ix * -qz,
      z: iz * qw + iw * -qz + ix * -qy - iy * -qx
    }
  }

  /**
   * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
   * @param start - defines the start value
   * @param end - defines the end value
   * @param amount - max defines amount between both (between 0 and 1)
   * @returns the new Vector3
   */
  export function lerp(
    start: ReadonlyVector3,
    end: ReadonlyVector3,
    amount: number
  ): MutableVector3 {
    const result = create(0, 0, 0)
    lerpToRef(start, end, amount, result)
    return result
  }

  /**
   * Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
   * @param start - defines the start value
   * @param end - defines the end value
   * @param amount - max defines amount between both (between 0 and 1)
   * @param result - defines the Vector3 where to store the result
   */
  export function lerpToRef(
    start: ReadonlyVector3,
    end: ReadonlyVector3,
    amount: number,
    result: MutableVector3
  ): void {
    result.x = start.x + (end.x - start.x) * amount
    result.y = start.y + (end.y - start.y) * amount
    result.z = start.z + (end.z - start.z) * amount
  }

  /**
   * Returns a new Vector3 as the cross product of the vectors "left" and "right"
   * The cross product is then orthogonal to both "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @returns the cross product
   */
  export function cross(
    left: ReadonlyVector3,
    right: ReadonlyVector3
  ): MutableVector3 {
    const result = Vector3.Zero()
    Vector3.crossToRef(left, right, result)
    return result
  }

  /**
   * Sets the given vector "result" with the cross product of "left" and "right"
   * The cross product is then orthogonal to both "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @param result - defines the Vector3 where to store the result
   */
  export function crossToRef(
    left: ReadonlyVector3,
    right: ReadonlyVector3,
    result: MutableVector3
  ): void {
    result.x = left.y * right.z - left.z * right.y
    result.y = left.z * right.x - left.x * right.z
    result.z = left.x * right.y - left.y * right.x
  }

  /**
   * Returns a new Vector3 set to (0.0, 0.0, 0.0)
   * @returns a new empty Vector3
   */
  export function Zero(): MutableVector3 {
    return create(0.0, 0.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (1.0, 1.0, 1.0)
   * @returns a new unit Vector3
   */
  export function One(): MutableVector3 {
    return create(1.0, 1.0, 1.0)
  }
  /**
   * Returns a new Vector3 set tolengthSquared (0.0, 1.0, 0.0)
   * @returns a new up Vector3
   */
  export function Up(): MutableVector3 {
    return create(0.0, 1.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, -1.0, 0.0)
   * @returns a new down Vector3
   */
  export function Down(): MutableVector3 {
    return create(0.0, -1.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, 0.0, 1.0)
   * @returns a new forward Vector3
   */
  export function Forward(): MutableVector3 {
    return create(0.0, 0.0, 1.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, 0.0, -1.0)
   * @returns a new forward Vector3
   */
  export function Backward(): MutableVector3 {
    return create(0.0, 0.0, -1.0)
  }
  /**
   * Returns a new Vector3 set to (1.0, 0.0, 0.0)
   * @returns a new right Vector3
   */
  export function Right(): MutableVector3 {
    return create(1.0, 0.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
   * @returns a new left Vector3
   */
  export function Left(): MutableVector3 {
    return create(-1.0, 0.0, 0.0)
  }
}
