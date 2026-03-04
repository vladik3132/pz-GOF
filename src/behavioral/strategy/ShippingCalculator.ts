//(Контекст/Клас)

import { ShippingStrategy } from './ShippingStrategy';

export class ShippingCalculator {
    private strategy: ShippingStrategy;

    constructor(strategy: ShippingStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: ShippingStrategy): void {
        this.strategy = strategy;
    }

    public calculate(weight: number, distance: number): number {
        return this.strategy.calculateCost(weight, distance);
    }
    

    
}
