export class ShippingCalculatorAntiPattern {
    public calculate(type: string, weight: number, distance: number): number {
        if (type === 'FedEx') return (weight * 5) + (distance * 0.1);
        if (type === 'UPS') return (weight * 4) + (distance * 0.2);
        if (type === 'USPS') return (weight * 2) + (distance * 0.5);
        throw new Error("Невідома служба!");
    }
}