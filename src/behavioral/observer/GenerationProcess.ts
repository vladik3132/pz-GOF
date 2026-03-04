//Суб'єкт Слухач 2: пише лог у файл/консоль 
import { AdminDashboard } from './AdminDashboard';
import { IObserver } from './IObserver';

export class GenerationProcess {
    private observers: IObserver[] = [];

    addObserver(o: IObserver): void {
        this.observers.push(o);
    }

    changeStatus(status: string): void {
        console.log(`\n[Process] Подія: ${status}`);
        this.notify(status);
    }

    private notify(status: string): void {
        for (const o of this.observers) {
            o.update(status);
        }
    }
}













   // private observers: AdminDashboard[] = [];
    // ми прив’яжемо GenerationProcess напряму до конкретного класу AdminDashboard