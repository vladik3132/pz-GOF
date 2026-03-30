import { Light } from './Light';
import { TV } from './TV';

export class SmartHouse {
    private light = new Light();
    private tv = new TV();

    // ОДИН метод, який робить ВСЕ
    public leaveHome(): void {
        console.log(" Виходимо з дому...");
        this.light.off();
        this.tv.off();
        console.log(" Двері зачинено. Гарного дня!");
    }
}