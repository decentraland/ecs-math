import { Vector3 } from './Vector3'
import { Quaternion } from './Quaternion'
import { Matrix } from './Matrix'
import { buildArray } from './utils'

// Temporary pre-allocated objects for engine internal use
// usage in any internal function :
// var tmp = Tmp.Vector3[0];   <= gets access to the first pre-created Vector3
// There's a Tmp array per object type : int, float, Vector2, Vector3, Vector4, Quaternion, Matrix

/**
 * @public
 * Same as Tmp but not exported to keep it only for math functions to avoid conflicts
 */
export const MathTmp = {
  Vector3: buildArray(6, Vector3.Zero) as Vector3.ReadonlyVector3[],
  Matrix: buildArray(2, Matrix.Identity) as Matrix.ReadonlyMatrix[],
  Quaternion: buildArray(3, Quaternion.Zero) as Quaternion.ReadonlyQuaternion[],
  staticUp: Vector3.Up() as Vector3.ReadonlyVector3,
  tmpMatrix: Matrix.Zero()
}
