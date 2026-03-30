import { ServiceAdapter } from './ServiceAdapter';
import { INotification } from './NewSystem';

// Ми працюємо через інтерфейс INotification
const sender: INotification = new ServiceAdapter();

// Викликаємо звичний нам метод send
sender.send("Успіх", "Адаптер працює!");