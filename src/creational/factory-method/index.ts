import { NotificationFactory } from './NotificationFactory';

// 1. Нам треба відправити Email
const myEmail = NotificationFactory.createNotification('email');
myEmail.send("Вітаємо з успішною реєстрацією!");

// 2. Нам треба відправити SMS
const mySms = NotificationFactory.createNotification('sms');
mySms.send("Ваш код доступу: 7788");
