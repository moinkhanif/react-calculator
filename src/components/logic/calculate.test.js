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

  describe('AC', () => {
    it('clears total, next, and operation', () => {
      expect(calculate({ total: '100', next: '100', operation: null }, 'AC')).toEqual({ next: null, operation: null, total: null });
    });
  });

  describe('=', () => {
    it('doesn\'t do any operation when total, next, or operation are null', () => {
      expect(calculate({ total: '100', next: null, operation: null }, '=')).toEqual({ next: null, operation: null, total: '100' });
    });

    it('performs operations when total, next, and operation are not null', () => {
      expect(calculate({ total: '100', next: '100', operation: '+' }, '=')).toEqual({ next: null, operation: '=', total: '200' });
    });
  });

  describe('. operator', () => {
    it('adds decimal point to total when operator and next are undefined', () => {
      expect(calculate({ total: '100', next: null, operation: null }, '.')).toEqual({ next: null, operation: null, total: '100.' });
    });

    it('doesn\'t do any operation when total already has decimal point', () => {
      expect(calculate({ total: '100.', next: null, operation: null }, '.')).toEqual({ next: null, operation: null, total: '100.' });
    });

    it('adds decimal point to next when operator and total are undefined', () => {
      expect(calculate({ total: '100', next: '10', operation: '+' }, '.')).toEqual({ next: '10.', operation: '+', total: '100' });
    });

    it('doesn\'t do any operation when next already has decimal point', () => {
      expect(calculate({ total: '100', next: '10.', operation: '+' }, '.')).toEqual({ next: '10.', operation: '+', total: '100' });
    });
  });
});
