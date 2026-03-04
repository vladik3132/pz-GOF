// Інтерфейс, який очікує наша система
interface IGenerativeModel {
    generateAnswer(text: string): string;
}

// Сторонній клас (наприклад, бібліотека OpenAI), який має інший метод
export class OpenAIClient {
    public createCompletion(params: { prompt: string }): string {
        return `[OpenAI Response] Відповідь на: ${params.prompt}`;
    }
}

// Адаптер
export class GPTAdapter implements IGenerativeModel {
    private service: OpenAIClient;

    constructor(service: OpenAIClient) {
        this.service = service;
    }

    generateAnswer(text: string): string {
        // Конвертуємо наш простий виклик у складний об'єкт для OpenAI
        return this.service.createCompletion({ prompt: text });
    }
}