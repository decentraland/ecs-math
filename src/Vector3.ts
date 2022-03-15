import { EcsMathReadOnlyQuaternion } from "."

/**
 * @public
 */
export type EcsMathMutableVector3 = {
  y: number
  x: number
  z: number
}

/**
 * @public
 */
export type EcsMathReadOnlyVector3 = Readonly<EcsMathMutableVector3>

/**
 * Creates a new Vector3 object from the given x, y, z (floats) coordinates.
 * @param x - defines the first coordinates (on X axis)
 * @param y - defines the second coordinates (on Y axis)
 * @param z - defines the third coordinates (on Z axis)
 */
function create(
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
): EcsMathMutableVector3 {
  return { x, y, z }
}

/**
 * Returns a new Vector3 as the result of the addition of the two given vectors.
 * @param vector1 - the first vector
 * @param vector2 - the second vector
 * @returns the resulting vector
 */
function add(
  vector1: EcsMathReadOnlyVector3,
  vector2: EcsMathReadOnlyVector3
): EcsMathMutableVector3 {
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
function sub(
  minuend: EcsMathReadOnlyVector3,
  subtrahend: EcsMathReadOnlyVector3
): EcsMathMutableVector3 {
  return {
    x: minuend.x - subtrahend.x,
    y: minuend.y - subtrahend.y,
    z: minuend.z - subtrahend.z
  }
}

/**
 * Returns a new Vector3 with the other sign
 * @returns the resulting vector
 */
function opposite(value: EcsMathReadOnlyVector3): EcsMathMutableVector3 {
  return { x: -value.x, y: -value.y, z: -value.z }
}

/**
 * Returns a new Vector3 with the same value
 * @returns the resulting vector
 */
function copy(value: EcsMathReadOnlyVector3): EcsMathMutableVector3 {
  return { x: value.x, y: value.y, z: value.z }
}

// Properties
/**
 * Gets the length of the Vector3
 * @returns the length of the Vecto3
 */
function length(vector: EcsMathReadOnlyVector3): number {
  return Math.sqrt(
    vector.x * vector.x + vector.y * vector.y + vector.z * vector.z
  )
}

/**
 * Gets the squared length of the Vector3
 * @returns squared length of the Vector3
 */
function lengthSquared(vector: EcsMathReadOnlyVector3): number {
  return vector.x * vector.x + vector.y * vector.y + vector.z * vector.z
}

/**
 * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
 * @param scale - defines the multiplier factor
 * @returns a new Vector3
 */
function scale(
  vector: EcsMathReadOnlyVector3,
  scale: number
): EcsMathMutableVector3 {
  return create(vector.x * scale, vector.y * scale, vector.z * scale)
}

/**
 * Normalize the current Vector3 with the given input length.
 * Please note that this is an in place operation.
 * @param len - the length of the vector
 * @returns the current updated Vector3
 */
function normalizeFromLength(
  vector: EcsMathReadOnlyVector3,
  len: number
): EcsMathMutableVector3 {
  if (len === 0 || len === 1.0) {
    return copy(vector)
  }

  return scale(vector, 1.0 / len)
}

/**
 * Normalize the current Vector3.
 * Please note that this is an in place operation.
 * @returns the current updated Vector3
 */
function normalize(vector: EcsMathReadOnlyVector3): EcsMathMutableVector3 {
  return normalizeFromLength(vector, length(vector))
}

/**
 * Sets the given vector "result" with the cross product of "left" and "right"
 * The cross product is then orthogonal to both "left" and "right"
 * @param left - defines the left operand
 * @param right - defines the right operand
 * @param result - defines the Vector3 where to store the result
 */
function cross(
  left: EcsMathReadOnlyVector3,
  right: EcsMathReadOnlyVector3
): EcsMathMutableVector3 {
  const x = left.y * right.z - left.z * right.y
  const y = left.z * right.x - left.x * right.z
  const z = left.x * right.y - left.y * right.x
  return { x, y, z }
}

/**
 * Returns the dot product (float) between the vectors "left" and "right"
 * @param left - defines the left operand
 * @param right - defines the right operand
 * @returns the dot product
 */
function dot(
  left: EcsMathReadOnlyVector3,
  right: EcsMathReadOnlyVector3
): number {
  return left.x * right.x + left.y * right.y + left.z * right.z
}

/**
 * Rotates current Vector3 based on the given quaternion, but applies the rotation to target Vector3.
 * @param q - defines the Quaternion
 * @param result - defines the target Vector3
 * @returns the current Vector3
 */
function rotate(
  vector: EcsMathReadOnlyVector3,
  q: EcsMathReadOnlyQuaternion
): EcsMathMutableVector3 {
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
 * Returns a new Vector3 set to (0.0, 0.0, 0.0)
 * @returns a new empty Vector3
 */
function Zero(): EcsMathMutableVector3 {
  return create(0.0, 0.0, 0.0)
}
/**
 * Returns a new Vector3 set to (1.0, 1.0, 1.0)
 * @returns a new unit Vector3
 */
function One(): EcsMathMutableVector3 {
  return create(1.0, 1.0, 1.0)
}
/**
 * Returns a new Vector3 set tolengthSquared (0.0, 1.0, 0.0)
 * @returns a new up Vector3
 */
function Up(): EcsMathMutableVector3 {
  return create(0.0, 1.0, 0.0)
}
/**
 * Returns a new Vector3 set to (0.0, -1.0, 0.0)
 * @returns a new down Vector3
 */
function Down(): EcsMathMutableVector3 {
  return create(0.0, -1.0, 0.0)
}
/**
 * Returns a new Vector3 set to (0.0, 0.0, 1.0)
 * @returns a new forward Vector3
 */
function Forward(): EcsMathMutableVector3 {
  return create(0.0, 0.0, 1.0)
}
/**
 * Returns a new Vector3 set to (0.0, 0.0, -1.0)
 * @returns a new forward Vector3
 */
function Backward(): EcsMathMutableVector3 {
  return create(0.0, 0.0, -1.0)
}
/**
 * Returns a new Vector3 set to (1.0, 0.0, 0.0)
 * @returns a new right Vector3
 */
function Right(): EcsMathMutableVector3 {
  return create(1.0, 0.0, 0.0)
}
/**
 * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
 * @returns a new left Vector3
 */
function Left(): EcsMathMutableVector3 {
  return create(-1.0, 0.0, 0.0)
}

/**
 * @public
 */
export const Vector3 = {
  // Methods
  create,
  add,
  sub,
  opposite,
  copy,
  normalize,
  normalizeFromLength,
  scale,
  length,
  lengthSquared,
  cross,
  dot,
  rotate,

  // Known Vector3s
  Zero,
  One,
  Up,
  Down,
  Forward,
  Backward,
  Right,
  Left
}
