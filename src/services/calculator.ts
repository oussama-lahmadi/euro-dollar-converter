import {Decimal} from 'decimal.js';

export const calculateAmount = (value: number, rate: number, operation: 'MULT' | 'DIV'): number => {
    const decimalValue = new Decimal(value);
    const decimalRate = new Decimal(rate);

    switch (operation) {
        case 'MULT':
            return decimalValue.times(decimalRate).toNumber();
        case 'DIV':
            return decimalValue.div(decimalRate).toNumber();
        default:
            throw new Error("Invalid operation");
    }
}

export const isDeviationMoreThanLimit = (val1: number, val2: number, limit: number) => {
    const valueX = new Decimal(val1);
    const valueY = new Decimal(val2);

    if (valueY.isZero()) {
        throw new Error("Value must not be 0.");
    }

    const percentageDeviation = valueX.minus(valueY).dividedBy(valueY).mul(100);
    return percentageDeviation.abs().greaterThan(limit);
}

