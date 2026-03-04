
import { ShippingStrategy } from './ShippingStrategy';

export class NP implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return (weight * 10) + (distance * 0.1);
    }
}