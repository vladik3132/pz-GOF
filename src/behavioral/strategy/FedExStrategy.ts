//(Реалізація 1)

import { ShippingStrategy } from './ShippingStrategy';

export class FedExStrategy implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight * 5) + (distance * 0.1);
    }
}