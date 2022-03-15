import { EcsMathMutableVector3, EcsMathReadOnlyVector3, Vector3 } from "."
import { Scalar } from "./Scalar"
import { DEG2RAD, RAD2DEG } from "./types"

/**
 * @public
 */
export type EcsMathMutableQuatearnion = {
  y: number
  x: number
  z: number
  w: number
}

/**
 * @public
 */
export type EcsMathReadOnlyQuaternion = Readonly<EcsMathMutableQuatearnion>

/**
 * Creates a new Quaternion from the given floats
 * @param x - defines the first component (0 by default)
 * @param y - defines the second component (0 by default)
 * @param z - defines the third component (0 by default)
 * @param w - defines the fourth component (1.0 by default)
 */
function create(
  /** defines the first component (0 by default) */
  x: number = 0.0,
  /** defines the second component (0 by default) */
  y: number = 0.0,
  /** defines the third component (0 by default) */
  z: number = 0.0,
  /** defines the fourth component (1.0 by default) */
  w: number = 1.0
): EcsMathMutableQuatearnion {
  return { x, y, z, w }
}

/**
 * Returns a new Quaternion as the result of the addition of the two given quaternions.
 * @param q1 - the first quaternion
 * @param q2 - the second quaternion
 * @returns the resulting quaternion
 */
function add(
  q1: EcsMathReadOnlyQuaternion,
  q2: EcsMathReadOnlyQuaternion
): EcsMathMutableQuatearnion {
  return { x: q1.x + q2.x, y: q1.y + q2.y, z: q1.z + q2.z, w: q1.w + q2.w }
}

/**
 * Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
 * @param yaw - defines the rotation around Y axis
 * @param pitch - defines the rotation around X axis
 * @param roll - defines the rotation around Z axis
 * @param result - defines the target quaternion
 */
function rotationYawPitchRoll(
  yaw: number,
  pitch: number,
  roll: number
): EcsMathMutableQuatearnion {
  // Implemented unity-based calculations from: https://stackoverflow.com/a/56055813

  const halfPitch = pitch * 0.5
  const halfYaw = yaw * 0.5
  const halfRoll = roll * 0.5

  const c1 = Math.cos(halfPitch)
  const c2 = Math.cos(halfYaw)
  const c3 = Math.cos(halfRoll)
  const s1 = Math.sin(halfPitch)
  const s2 = Math.sin(halfYaw)
  const s3 = Math.sin(halfRoll)

  return create(
    c2 * s1 * c3 + s2 * c1 * s3,
    s2 * c1 * c3 - c2 * s1 * s3,
    c2 * c1 * s3 - s2 * s1 * c3,
    c2 * c1 * c3 + s2 * s1 * s3
  )
}

/**
 * Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
 * @param x - the rotation on the x axis in euler degrees
 * @param y - the rotation on the y axis in euler degrees
 * @param z - the rotation on the z axis in euler degrees
 */
function euler(x: number, y: number, z: number): EcsMathMutableQuatearnion {
  return rotationYawPitchRoll(y * DEG2RAD, x * DEG2RAD, z * DEG2RAD)
}

/**
 * Gets length of current quaternion
 * @returns the quaternion length (float)
 */
function length(q: EcsMathReadOnlyQuaternion): number {
  return Math.sqrt(lengthSquared(q))
}

/**
 * Gets length of current quaternion
 * @returns the quaternion length (float)
 */
function lengthSquared(q: EcsMathReadOnlyQuaternion): number {
  return q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w
}

/**
 * Returns the dot product (float) between the quaternions "left" and "right"
 * @param left - defines the left operand
 * @param right - defines the right operand
 * @returns the dot product
 */
function dot(
  left: EcsMathReadOnlyQuaternion,
  right: EcsMathReadOnlyQuaternion
): number {
  return (
    left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
  )
}

/**
 * Returns the angle in degrees between two rotations a and b.
 * @param quat1 - defines the first quaternion
 * @param quat2 - defines the second quaternion
 */
function angle(
  quat1: EcsMathReadOnlyQuaternion,
  quat2: EcsMathReadOnlyQuaternion
): number {
  const dotVal = dot(quat1, quat2)
  return Math.acos(Math.min(Math.abs(dotVal), 1)) * 2 * RAD2DEG
}

/**
 * Interpolates between two quaternions and stores it into a target quaternion
 * @param left - defines first quaternion
 * @param right - defines second quaternion
 * @param amount - defines the gradient to use
 * @param result - defines the target quaternion
 */
function slerp(
  left: EcsMathReadOnlyQuaternion,
  right: EcsMathReadOnlyQuaternion,
  amount: number
): EcsMathMutableQuatearnion {
  let num2
  let num3
  let num4 =
    left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
  let flag = false

  if (num4 < 0) {
    flag = true
    num4 = -num4
  }

  if (num4 > 0.999999) {
    num3 = 1 - amount
    num2 = flag ? -amount : amount
  } else {
    const num5 = Math.acos(num4)
    const num6 = 1.0 / Math.sin(num5)
    num3 = Math.sin((1.0 - amount) * num5) * num6
    num2 = flag
      ? -Math.sin(amount * num5) * num6
      : Math.sin(amount * num5) * num6
  }

  return {
    x: num3 * left.x + num2 * right.x,
    y: num3 * left.y + num2 * right.y,
    z: num3 * left.z + num2 * right.z,
    w: num3 * left.w + num2 * right.w
  }
}

/**
 * The from quaternion is rotated towards to by an angular step of maxDegreesDelta.
 * @param from - defines the first quaternion
 * @param to - defines the second quaternion
 * @param maxDegreesDelta - the interval step
 */
function rotateTowards(
  from: EcsMathReadOnlyQuaternion,
  to: EcsMathReadOnlyQuaternion,
  maxDegreesDelta: number
): EcsMathReadOnlyQuaternion {
  const num: number = angle(from, to)
  if (num === 0) {
    return to
  }
  const t: number = Math.min(1, maxDegreesDelta / num)

  return slerp(from, to, t)
}

/**
 * Creates a rotation with the specified forward and upwards directions.
 * @param forward - the direction to look in
 * @param up - the vector that defines in which direction up is
 */
function lookRotation(
  forward: EcsMathReadOnlyVector3,
  up: EcsMathReadOnlyVector3 = { x: 0.0, y: 1.0, z: 0.0 }
): EcsMathMutableQuatearnion {
  const forwardNew = Vector3.normalize(forward)
  const right = Vector3.normalize(Vector3.cross(up, forwardNew))
  const upNew = Vector3.cross(forwardNew, right)
  const m00 = right.x
  const m01 = right.y
  const m02 = right.z
  const m10 = upNew.x
  const m11 = upNew.y
  const m12 = upNew.z
  const m20 = forwardNew.x
  const m21 = forwardNew.y
  const m22 = forwardNew.z

  const num8 = m00 + m11 + m22
  const quaternion = create()

  if (num8 > 0) {
    let num = Math.sqrt(num8 + 1)
    quaternion.w = num * 0.5
    num = 0.5 / num
    quaternion.x = (m12 - m21) * num
    quaternion.y = (m20 - m02) * num
    quaternion.z = (m01 - m10) * num
    return quaternion
  }

  if (m00 >= m11 && m00 >= m22) {
    const num7 = Math.sqrt(1 + m00 - m11 - m22)
    const num4 = 0.5 / num7
    quaternion.x = 0.5 * num7
    quaternion.y = (m01 + m10) * num4
    quaternion.z = (m02 + m20) * num4
    quaternion.w = (m12 - m21) * num4
    return quaternion
  }

  if (m11 > m22) {
    const num6 = Math.sqrt(1 + m11 - m00 - m22)
    const num3 = 0.5 / num6
    quaternion.x = (m10 + m01) * num3
    quaternion.y = 0.5 * num6
    quaternion.z = (m21 + m12) * num3
    quaternion.w = (m20 - m02) * num3
    return quaternion
  }

  const num5 = Math.sqrt(1 + m22 - m00 - m11)
  const num2 = 0.5 / num5
  quaternion.x = (m20 + m02) * num2
  quaternion.y = (m21 + m12) * num2
  quaternion.z = 0.5 * num5
  quaternion.w = (m01 - m10) * num2
  return quaternion
}

/**
 * Normalize in place the current quaternion
 * @returns the current updated quaternion
 */
function normalize(q: EcsMathReadOnlyQuaternion): EcsMathMutableQuatearnion {
  const qLength = 1.0 / length(q)
  return create(q.x * qLength, q.y * qLength, q.z * qLength, q.w * qLength)
}

/**
 * Creates a rotation which rotates from fromDirection to toDirection.
 * @param from - defines the first direction Vector
 * @param to - defines the target direction Vector
 */
function fromToRotation(
  from: EcsMathReadOnlyVector3,
  to: EcsMathReadOnlyVector3,
  up: EcsMathReadOnlyVector3 = Vector3.Up()
): EcsMathMutableQuatearnion {
  // Unity-based calculations implemented from https://forum.unity.com/threads/quaternion-lookrotation-around-an-axis.608470/#post-4069888

  const v0 = Vector3.normalize(from)
  const v1 = Vector3.normalize(to)

  const a = Vector3.cross(v0, v1)
  const w =
    Math.sqrt(Vector3.lengthSquared(v0) * Vector3.lengthSquared(v1)) +
    Vector3.dot(v0, v1)
  if (Vector3.lengthSquared(a) < 0.0001) {
    // the vectors are parallel, check w to find direction
    // if w is 0 then values are opposite, and we sould rotate 180 degrees around the supplied axis
    // otherwise the vectors in the same direction and no rotation should occur
    return Math.abs(w) < 0.0001
      ? normalize(create(up.x, up.y, up.z, 0))
      : Identity()
  } else {
    return normalize(create(a.x, a.y, a.z, w))
  }
}

/**
 * Creates an identity quaternion
 * @returns - the identity quaternion
 */
function Identity(): EcsMathMutableQuatearnion {
  return create(0.0, 0.0, 0.0, 1.0)
}

/**
 * Gets or sets the euler angle representation of the rotation.
 * Implemented unity-based calculations from: https://stackoverflow.com/a/56055813
 */
function eulerAngles(q: EcsMathMutableQuatearnion) {
  const out = Vector3.create()

  // if the input quaternion is normalized, this is exactly one. Otherwise, this acts as a correction factor for the quaternion's not-normalizedness
  const unit = q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w

  // q will have a magnitude of 0.5 or greater if and only if q is a singularity case
  const test = q.x * q.w - q.y * q.z

  if (test > 0.4995 * unit) {
    // singularity at north pole
    out.x = Math.PI / 2
    out.y = 2 * Math.atan2(q.y, q.x)
    out.z = 0
  } else if (test < -0.4995 * unit) {
    // singularity at south pole
    out.x = -Math.PI / 2
    out.y = -2 * Math.atan2(q.y, q.x)
    out.z = 0
  } else {
    // no singularity - q is the majority of cases
    out.x = Math.asin(2 * (q.w * q.x - q.y * q.z))
    out.y = Math.atan2(
      2 * q.w * q.y + 2 * q.z * q.x,
      1 - 2 * (q.x * q.x + q.y * q.y)
    )
    out.z = Math.atan2(
      2 * q.w * q.z + 2 * q.x * q.y,
      1 - 2 * (q.z * q.z + q.x * q.x)
    )
  }
  out.x *= RAD2DEG
  out.y *= RAD2DEG
  out.z *= RAD2DEG

  // ensure the degree values are between 0 and 360
  out.x = Scalar.repeat(out.x, 360)
  out.y = Scalar.repeat(out.y, 360)
  out.z = Scalar.repeat(out.z, 360)

  return out
}

/**
 * @public
 */
export const Quaternion = {
  // Methods
  create,
  add,
  rotationYawPitchRoll,
  rotateTowards,
  euler,
  slerp,
  angle,
  length,
  lengthSquared,
  lookRotation,
  fromToRotation,
  eulerAngles,
  normalize,

  // Known quaternions
  Identity
}
