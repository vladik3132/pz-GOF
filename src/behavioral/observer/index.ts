//Точка входу для тесту)

import { GenerationProcess } from './GenerationProcess';
import { AdminDashboard } from './AdminDashboard';

const process = new GenerationProcess();
const adminPanel = new AdminDashboard();

// Підписка
process.addObserver(adminPanel);

// Тест
process.changeStatus("Генерація тестів розпочата.");
process.changeStatus("Генерація завершена успішно!");




















/*
// 1. Імпортуємо класи з інших файлів
// Зверни увагу: назви файлів мають збігатися з тими, що в папці
import { GenerationProcess } from './GenerationProcess';
import { AdminDashboard } from './AdminDashboard';
import { EmailNotification } from './EmailNotification'; // Переконайся, що такий файл існує

// 2. Створюємо змінні (назву 'process' змінили на 'proc', щоб не було помилки)
const proc = new GenerationProcess();
const adminPanel = new AdminDashboard();
const emailService = new EmailNotification();

// 3. Тестуємо логіку
proc.addObserver(adminPanel);
proc.addObserver(emailService);

proc.changeStatus("Генерація тестів розпочата...");
*/