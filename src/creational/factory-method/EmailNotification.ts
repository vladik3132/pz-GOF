import { Notification } from './Notification';

export class EmailNotification implements Notification {
    send(message: string) {
        console.log(` [EMAIL]: Надсилаю лист із текстом: "${message}"`);
    }
}