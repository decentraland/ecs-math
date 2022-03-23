import { Matrix } from '../src/Matrix'

const results = {
  identity:
    '([1.0, 0.0, 0.0, 0.0], [0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 0.0, 1.0])'
}

const normalize = (v: string) => (v === '-0.0' ? '0.0' : v)
const v = (matrix: Matrix.ReadonlyMatrix, index: number) =>
  normalize(matrix._m[index].toFixed(1).substr(0, 6))

function matrixToString(m: Matrix.ReadonlyMatrix) {
  let res = ''
  res += `([${v(m, 0)}, ${v(m, 1)}, ${v(m, 2)}, ${v(m, 3)}], `
  res += `[${v(m, 4)}, ${v(m, 5)}, ${v(m, 6)}, ${v(m, 7)}], `
  res += `[${v(m, 8)}, ${v(m, 9)}, ${v(m, 10)}, ${v(m, 11)}], `
  res += `[${v(m, 12)}, ${v(m, 13)}, ${v(m, 14)}, ${v(m, 15)}])`
  return res
}

describe('ECS Matrix - Next tests', () => {
  it('Matrix.create One', () => {
    expect(matrixToString(Matrix.Identity())).toEqual(results.identity)
  })
})
