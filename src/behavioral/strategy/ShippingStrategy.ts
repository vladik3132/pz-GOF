//Інтерфейс)

export interface ShippingStrategy {
    calculateCost(weight: number, distance: number): number;
}