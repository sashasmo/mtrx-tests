const chai = require('chai');
const Mtrx = require('mtrx');
const expect = chai.expect;

describe('Mtrx', () => {
  describe('add', () => {
    it('should add two matrices', () => {
      const A = [
        [1, 2],
        [3, 4],
      ];
      const B = [
        [5, 6],
        [7, 8],
      ];
      const C = Mtrx.add(A, B);
      expect(C).to.deep.equal([
        [6, 8],
        [10, 12],
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
      expect(() => Mtrx.add(A, B)).to.throw(/Matrices have different sizes/);
    });
  });

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
      const C = Mtrx.subtract(A, B);
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
      expect(() => Mtrx.subtract(A, B)).to.throw(/Matrices have different sizes/);
    });
  });
});
