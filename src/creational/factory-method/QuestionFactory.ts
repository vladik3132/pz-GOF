// Інтерфейс продукту
interface ITestQuestion {
    render(): void;
}

// Конкретні продукти
class MultipleChoiceQuestion implements ITestQuestion {
    render(): void {
        console.log('[Factory] Рендеринг питання з вибором варіантів (Radio buttons).');
    }
}

class CodeQuestion implements ITestQuestion {
    render(): void {
        console.log('[Factory] Рендеринг питання для написання коду (IDE editor).');
    }
}

// Абстрактний творець
abstract class QuestionCreator {
    public abstract createQuestion(): ITestQuestion;
}

// Конкретні творці
export class MultipleChoiceCreator extends QuestionCreator {
    public createQuestion(): ITestQuestion {
        return new MultipleChoiceQuestion();
    }
}

export class CodeQuestionCreator extends QuestionCreator {
    public createQuestion(): ITestQuestion {
        return new CodeQuestion();
    }
}