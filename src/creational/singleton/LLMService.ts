import { log } from "node:console"

export class LLMService {
    private static instance: LLMService;
    private apiKey: string;

    public constructor() {
        this.apiKey = "sk-xxxxxxxxxxxx"; // У реальності береться з ENV
    }

    
    public static getInstance(): LLMService {
        
            LLMService.instance = new LLMService();
        
        return LLMService.instance;
    }

    public sendRequest(prompt: string): void {
        console.log(`[Singleton] Відправка запиту до LLM з ключем ${this.apiKey}...`);
        console.log(`>> Промпт: ${prompt.substring(0, 30)}...`);
    }




}




const s1 =  LLMService.getInstance();
    const s2 =  LLMService.getInstance();

    if (s1 === s2) {
        console.log(
            'Singleton works, both variables contain the same instance.'
        );
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }

