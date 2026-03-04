// Імпорти (перевір, щоб шляхи збігалися з твоїми файлами)
import { LLMService } from '../creational/singleton/LLMService';
import { MultipleChoiceCreator, CodeQuestionCreator } from '../creational/factory-method/QuestionFactory';
import { GPTAdapter, OpenAIClient } from '../structural/adapter/LLMAdapter';
import { TestGenerationFacade } from '../structural/facade/TestGenerationFacade';
import { GenerationProcess, AdminDashboard } from '../behavioral/observer';

async function main() {
    console.log('===========================================================');
    console.log('🎓 ЗАПУСК СИСТЕМИ ГЕНЕРАЦІЇ ТЕСТІВ (DIPLOMA DEMO)');
    console.log('===========================================================\n');

    // 1. SINGLETON: Перевіряємо з'єднання з сервісом LLM
    console.log('--- 1. Перевірка Singleton (LLM Service) ---');
    const llmService1 = LLMService.getInstance();
    const llmService2 = LLMService.getInstance();
    
    // Перевірка, що це один і той самий об'єкт
    if (llmService1 === llmService2) {
        console.log('✅ LLMService працює коректно (один екземпляр на всю програму).');
    }
    llmService1.sendRequest('Ping system check');
    console.log('');

    // 2. OBSERVER: Налаштовуємо моніторинг для адмінки
    console.log('--- 2. Налаштування Observer (Моніторинг) ---');
    const processMonitor = new GenerationProcess();
    const adminPanel = new AdminDashboard();
    
    processMonitor.addObserver(adminPanel);
    console.log('✅ Адміністратор підписався на оновлення статусу генерації.');
    console.log('');

    // 3. ADAPTER: Підключаємо конкретну модель (OpenAI)
    console.log('--- 3. Підключення Adapter (OpenAI Integration) ---');
    const openAI = new OpenAIClient();
    const modelAdapter = new GPTAdapter(openAI);
    // Тут ми демонструємо, що адаптер працює
    console.log(modelAdapter.generateAnswer("Тестовий запит до моделі"));
    console.log('');

    // 4. FACADE: Запускаємо складний процес генерації однією командою
    console.log('--- 4. Робота Facade (Генерація повного тесту) ---');
    const generatorFacade = new TestGenerationFacade();
    
    // Імітуємо зміну статусів через Observer під час роботи Фасаду
    processMonitor.changeStatus('START_GENERATION');
    
    // Виклик складного методу фасаду
    generatorFacade.generateFullTest('Java Spring Boot Basics');
    
    processMonitor.changeStatus('COMPLETED');
    console.log('');

    // 5. FACTORY METHOD: Деталізація (Створення конкретних питань)
    console.log('--- 5. Factory Method (Рендеринг отриманих питань) ---');
    console.log('Система отримала дані і створює об\'єкти питань:');
    
    const choiceFactory = new MultipleChoiceCreator();
    const codeFactory = new CodeQuestionCreator();

    const q1 = choiceFactory.createQuestion();
    const q2 = codeFactory.createQuestion();

    q1.render(); // Виведе: Рендеринг питання з вибором варіантів...
    q2.render(); // Виведе: Рендеринг питання для написання коду...
    
    console.log('\n===========================================================');
    console.log('🏁 ДЕМОНСТРАЦІЮ ЗАВЕРШЕНО УСПІШНО');
}

main();