//(Реалізація 2)

import { ShippingStrategy } from './ShippingStrategy';

export class UPSStrategy implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight * 4) + (distance * 0.2);
    }
}