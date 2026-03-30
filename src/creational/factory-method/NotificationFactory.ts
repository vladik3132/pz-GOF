import { EmailNotification } from './EmailNotification';
import { SmsNotification } from './SmsNotification';
import { Notification } from './Notification';

export class NotificationFactory {
    // Статичний метод, щоб не створювати саму фабрику через new
    public static createNotification(type: 'email' | 'sms'): Notification {
        if (type === 'email') {
            return new EmailNotification();
        }
        if (type === 'sms') {
            return new SmsNotification();
        }
        throw new Error("Невідомий тип повідомлення!");
    }
}