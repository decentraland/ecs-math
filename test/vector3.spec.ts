import { Quaternion } from '../src/Quaternion'
import { Vector3 } from '../src/Vector3'

const results = {
  zeros: '(0.0, 0.0, 0.0)',
  ones: '(1.0, 1.0, 1.0)',
  minusOnes: '(-1.0, -1.0, -1.0)',
  rotatedWithQuat01: '(0.7, 0.0, 1.6)',
  rotatedWithQuat02: '(-0.1, -0.9, 0.6)',
  rotatedWithQuat03: '(127.7, 46.0, -30.2)',
  rotatedWithQuat04: '(-115.4, -138.8, 327.7)'
}

const normalize = (v: string) => (v === '-0.0' ? '0.0' : v)

function vector3ToString(vec: Vector3.MutableVector3) {
  const x = normalize(vec.x.toFixed(1).substr(0, 6))
  const y = normalize(vec.y.toFixed(1).substr(0, 6))
  const z = normalize(vec.z.toFixed(1).substr(0, 6))

  return `(${x}, ${y}, ${z})`
}

describe('ECS Vector3 - Next tests', () => {
  it('Vector3.create One', () => {
    expect(vector3ToString(Vector3.One())).toEqual(results.ones)
  })

  it('Vector3.create zeros', () => {
    expect(vector3ToString(Vector3.Zero())).toEqual(results.zeros)
  })

  it('Vector3.add ones + zeros = ones', () => {
    expect(vector3ToString(Vector3.add(Vector3.Zero(), Vector3.One()))).toEqual(
      results.ones
    )
  })

  it('Vector3.sub zeros - ones = -ones', () => {
    expect(
      vector3ToString(Vector3.subtract(Vector3.Zero(), Vector3.One()))
    ).toEqual(results.minusOnes)
  })

  it('Vector3.opposite(ones) = -ones', () => {
    expect(vector3ToString(Vector3.negate(Vector3.One()))).toEqual(
      results.minusOnes
    )
  })

  it('Vector3.copy(ones) = ones', () => {
    const immutableVector = Vector3.One() as Vector3.ReadonlyVector3
    const mutableVector = Vector3.clone(immutableVector)

    mutableVector.x = 2.0

    expect(immutableVector).toStrictEqual(Vector3.One())
    expect(mutableVector.x).toEqual(2.0)
  })

  it('vector3.rotate', () => {
    expect(
      vector3ToString(
        Vector3.rotate(Vector3.One(), Quaternion.euler(45, 60, 90))
      )
    ).toEqual(results.rotatedWithQuat01)

    expect(
      vector3ToString(
        Vector3.rotate(
          Vector3.create(1, 0, -0.5),
          Quaternion.euler(-165, 55, 125)
        )
      )
    ).toEqual(results.rotatedWithQuat02)

    expect(
      vector3ToString(
        Vector3.rotate(
          Vector3.create(100, -90, 35),
          Quaternion.euler(45, 60, 90)
        )
      )
    ).toEqual(results.rotatedWithQuat03)

    expect(
      vector3ToString(
        Vector3.rotate(
          Vector3.create(100, 200, 300),
          Quaternion.euler(47.572, 13.179, 83.369)
        )
      )
    ).toEqual(results.rotatedWithQuat04)
  })

  it('Vector3 operations isNonUniform', () => {
    expect(Vector3.isNonUniform(Vector3.create(1, -2, -5))).toEqual(true)
    expect(Vector3.isNonUniform(Vector3.create(1, 1, -5))).toEqual(true)
    expect(Vector3.isNonUniform(Vector3.create(1, -1, -1))).toEqual(false)
    expect(Vector3.isNonUniform(Vector3.create(1, 1, 1))).toEqual(false)
  })

  it('Vector3 operations subtract', () => {
    const vector1 = Vector3.create(10, 10, -10) as Vector3.ReadonlyVector3
    const vector2 = Vector3.create(2, 2, 2) as Vector3.ReadonlyVector3
    const result = Vector3.create()

    Vector3.subtractToRef(vector1, vector2, result)
    expect(result.x).toEqual(8)
    expect(result.y).toEqual(8)
    expect(result.z).toEqual(-12)

    Vector3.subtractFromFloatsToRef(vector1, -10, -10, -10, result)
    expect(result.x).toEqual(20)
    expect(result.y).toEqual(20)
    expect(result.z).toEqual(0)
  })

  it('Vector3 operations addToRef', () => {
    const vector1 = Vector3.create(10, 10, -10) as Vector3.ReadonlyVector3
    const vector2 = Vector3.create(2, 2, 2) as Vector3.ReadonlyVector3
    const result = Vector3.create()

    Vector3.addToRef(vector1, vector2, result)
    expect(result.x).toEqual(12)
    expect(result.y).toEqual(12)
    expect(result.z).toEqual(-8)
  })

  it('Vector3 operations addToRef', () => {
    const result = Vector3.create()
    Vector3.copyFromFloats(20, 21, 23.5, result)
    expect(result.x).toEqual(20)
    expect(result.y).toEqual(21)
    expect(result.z).toEqual(23.5)
  })

  it('Vector3 getClipFactor', () => {
    const vector1 = Vector3.create(10, 10, -10) as Vector3.ReadonlyVector3
    const vector2 = Vector3.create(2, 2, 2) as Vector3.ReadonlyVector3
    const axis = Vector3.One()
    expect(Vector3.getClipFactor(vector1, vector2, axis, 1)).toEqual(2.25)
  })

  it('Vector3 getAngleBetweenVectors', () => {
    const vector1 = Vector3.create(5, 5, 5) as Vector3.ReadonlyVector3
    const vector2 = Vector3.Zero() as Vector3.ReadonlyVector3
    const normal = Vector3.cross(vector1, vector2)
    expect(
      Vector3.getAngleBetweenVectors(vector1, vector2, normal)
    ).toBeCloseTo(-Math.PI / 2)
    expect(
      Vector3.getAngleBetweenVectors(vector1, vector2, Vector3.negate(normal))
    ).toBeCloseTo(-Math.PI / 2)
  })
})
