import { Settings } from './Settings';
import { logCurrentLanguage } from './Logger';

// 1. Отримуємо доступ до налаштувань
const mySettings = Settings.getInstance();
console.log(` В головному меню мова: ${mySettings.language}`);

// 2. Викликаємо логер (інший файл)
logCurrentLanguage();

// 3. Змінюємо мову в головному меню
console.log("\n--- Зміна мови на English ---");
mySettings.language = "English";

// 4. Перевіряємо знову через логер
logCurrentLanguage();