import { Matrix } from '../src/Matrix'

const results = {
  identity:
    '(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)'
}

const normalize = (v: string) => (v === '-0.0' ? '0.0' : v)

function matrixToString(mat: Matrix.ReadonlyMatrix) {
  let res = '('
  for (const [i, value] of mat._m.entries()) {
    if (i < 15) {
      res += `${normalize(value.toFixed(1).substr(0, 6))}, `
    } else {
      res += `${normalize(value.toFixed(1).substr(0, 6))})`
    }
  }
  return res
}

describe('ECS Matrix tests', () => {
  it('Matrix.create One', () => {
    expect(matrixToString(Matrix.Identity())).toEqual(results.identity)
  })
})
