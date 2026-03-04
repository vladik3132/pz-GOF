import { ISubscriber } from './ISubscriber';

// ОБОВ'ЯЗКОВО додаємо слово export
export class User implements ISubscriber {
    constructor(private name: string) {}

    update(videoTitle: string): void {
        console.log(`[${this.name}] отримав сповіщення про: ${videoTitle}`);
    }
}