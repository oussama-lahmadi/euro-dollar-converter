import {calculateAmount, isDeviationMoreThanLimit} from "./calculator";

describe('calculateAmount', () => {
    test('should multiply two numbers', () => {
        const result = calculateAmount(5, 2, 'MULT');
        expect(result).toBe(10);
    });

    test('should divide two numbers', () => {
        const result = calculateAmount(10, 2, 'DIV');
        expect(result).toBe(5);
    });

    test('should throw error on invalid operation', () => {
        expect(() => calculateAmount(10, 2, 'INVALID' as any)).toThrow("Invalid operation");
    });
});

describe('isDeviationMoreThanLimit', () => {
    test('should return true for a deviation greater than limit', () => {
        const result = isDeviationMoreThanLimit(105, 100, 2);
        expect(result).toBe(true);
    });

    test('should return false for a deviation equal to limit', () => {
        const result = isDeviationMoreThanLimit(102, 100, 2);
        expect(result).toBe(false);
    });

    test('should return false for a deviation less than limit', () => {
        const result = isDeviationMoreThanLimit(101, 100, 2);
        expect(result).toBe(false);
    });

    test('should throw error when comparing to zero', () => {
        expect(() => isDeviationMoreThanLimit(100, 0, 2)).toThrow("Value must not be 0.");
    });
});
