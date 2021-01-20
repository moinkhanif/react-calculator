import calculate from './calculate';

describe('calculate', () => {
  it('is defined', () => {
    expect(calculate).toBeDefined();
  });

  describe('operations', () => {
    describe('addition', () => {
      it('adds two positive numbers', () => {
        expect(calculate({ total: '1', next: '1', operation: '+' }, '=')).toEqual({ next: null, operation: '=', total: '2' });
      });

      it('adds two negative numbers', () => {
        expect(calculate({ total: '-1', next: '-1', operation: '+' }, '=')).toEqual({ next: null, operation: '=', total: '-2' });
      });

      it('subtracts when ony one number is negative', () => {
        expect(calculate({ total: '-1', next: '1', operation: '+' }, '=')).toEqual({ next: null, operation: '=', total: '0' });
      });
    });
  });

  describe('subtraction', () => {
    it('subtracts two positive numbers', () => {
      expect(calculate({ total: '1', next: '1', operation: '-' }, '=')).toEqual({ next: null, operation: '=', total: '0' });
    });

    it('subtracts two negative numbers', () => {
      expect(calculate({ total: '-1', next: '-1', operation: '-' }, '=')).toEqual({ next: null, operation: '=', total: '0' });
    });

    it('adds when ony one number is positive', () => {
      expect(calculate({ total: '-1', next: '1', operation: '-' }, '=')).toEqual({ next: null, operation: '=', total: '-2' });
    });
  });

  describe('divides', () => {
    it('divides two positive numbers', () => {
      expect(calculate({ total: '10', next: '5', operation: '÷' }, '=')).toEqual({ next: null, operation: '=', total: '2' });
    });

    it('divides two negative numbers', () => {
      expect(calculate({ total: '-1', next: '-1', operation: '÷' }, '=')).toEqual({ next: null, operation: '=', total: '1' });
    });

    it('divides when ony one number is positive/negative', () => {
      expect(calculate({ total: '-1', next: '1', operation: '÷' }, '=')).toEqual({ next: null, operation: '=', total: '-1' });
    });

    it('returns error when divided by zero', () => {
      expect(calculate({ total: '10', next: '0', operation: '÷' }, '=')).toEqual({ next: null, operation: '=', total: 'Error: Cannot divide by 0' });
    });
  });

  describe('multiplies', () => {
    it('multiplies two positive numbers', () => {
      expect(calculate({ total: '10', next: '5', operation: 'X' }, '=')).toEqual({ next: null, operation: '=', total: '50' });
    });

    it('multiplies two negative numbers', () => {
      expect(calculate({ total: '-1', next: '-1', operation: 'X' }, '=')).toEqual({ next: null, operation: '=', total: '1' });
    });

    it('multiplies when ony one number is positive/negative', () => {
      expect(calculate({ total: '-1', next: '1', operation: 'X' }, '=')).toEqual({ next: null, operation: '=', total: '-1' });
    });

    it('returns 0 when multiplied by zero', () => {
      expect(calculate({ total: '10', next: '0', operation: 'X' }, '=')).toEqual({ next: null, operation: '=', total: '0' });
    });

    it('returns float when one of the numbers is decimal', () => {
      expect(calculate({ total: '1.01', next: '10', operation: 'X' }, '=')).toEqual({ next: null, operation: '=', total: '10.1' });
    });
  });

  describe('percent', () => {
    it('returns percent of a number', () => {
      expect(calculate({ total: '100', next: '100', operation: null }, '%')).toEqual({ next: '100', operation: '%', total: '1' });
    });

    it('returns 0 if decimal points exceed 4 places', () => {
      expect(calculate({ total: '0.001', next: null, operation: null }, '%')).toEqual({ next: null, operation: '%', total: '0' });
    });
  });
});
