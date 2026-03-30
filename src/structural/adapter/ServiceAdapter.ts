import { INotification } from './NewSystem';
import { OldLibrary } from './OldLibrary';

export class ServiceAdapter implements INotification {
    private oldService = new OldLibrary();

    // Реалізуємо стандартний метод send
    public send(title: string, message: string): void {
        // А всередині "перекладаємо" його для старої бібліотеки
        this.oldService.legacyPush(message, title);
    }
}