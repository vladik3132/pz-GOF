import { ShippingCalculator } from './ShippingCalculator';
import { FedExStrategy } from './FedExStrategy';
import { UPSStrategy } from './UPSStrategy';
import { USPSStrategy } from './USPSStrategy';

const calculator = new ShippingCalculator(new FedExStrategy());

console.log("FedEx:", calculator.calculate(10, 100));

calculator.setStrategy(new UPSStrategy());
console.log("UPS:", calculator.calculate(10, 100));

calculator.setStrategy(new USPSStrategy());
console.log("USPS:", calculator.calculate(10, 100));