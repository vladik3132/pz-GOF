//(Реалізація 3)

import { ShippingStrategy } from './ShippingStrategy';

export class USPSStrategy implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight * 2) + (distance * 0.5);
    }
}