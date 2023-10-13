const chai = require('chai');
const expect = chai.expect;
const Mtrx = require('./index');

function subtract(matrixA, matrixB) {
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    throw new Error('Matrices have different sizes');
  }

  return matrixA.map((row, i) => row.map((el, j) => el - matrixB[i][j]));
}

describe('Mtrx', () => {
  describe('subtract', () => {
    it('should subtract two matrices', () => {
      const A = [
        [1, 2],
        [3, 4],
      ];
      const B = [
        [5, 6],
        [7, 8],
      ];
      const C = subtract(A, B);
      expect(C).to.deep.equal([
        [-4, -4],
        [-4, -4],
      ]);
    });

    it('should throw an error if matrices have different sizes', () => {
      const A = [
        [1, 2],
        [3, 4],
      ];
      const B = [
        [5, 6],
        [7, 8],
        [9, 10],
      ];
      expect(() => subtract(A, B)).to.throw(/Matrices have different sizes/); 
    });
  });
});
