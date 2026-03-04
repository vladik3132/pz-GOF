class PromptEngineer {
    createPrompt(topic: string): string {
        console.log(`1. Створення промпту для теми: ${topic}`);
        return `Згенеруй 5 тестів по темі ${topic} у форматі JSON`;
    }
}

class LLMApi {
    fetch(prompt: string): string {
        console.log(`2. Відправка API запиту...`);
        return `{"questions": ["Test 1", "Test 2"]}`; // імітація відповіді
    }
}

class Parser {
    parse(json: string): void {
        console.log(`3. Парсинг відповіді та збереження в БД.`);
    }
}

// Фасад
export class TestGenerationFacade {
    private prompter = new PromptEngineer();
    private api = new LLMApi();
    private parser = new Parser();

    public generateFullTest(topic: string): void {
        console.log('--- [Facade] Початок генерації тесту ---');
        const prompt = this.prompter.createPrompt(topic);
        const result = this.api.fetch(prompt);
        this.parser.parse(result);
        console.log('--- [Facade] Генерація завершена ---\n');
    }
}