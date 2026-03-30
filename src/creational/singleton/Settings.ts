export class Settings {
    private static instance: Settings;
    public language: string = "Українська"; // Початкове значення

    private constructor() {
        console.log(" Налаштування завантажено ");
    }

    public static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
    // Якщо instance ще порожній (перший виклик) — створюємо об'єкт. 
    // Якщо вже є — просто повертаємо той, що лежить у пам'яті.
}