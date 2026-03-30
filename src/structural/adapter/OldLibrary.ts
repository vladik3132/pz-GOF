export class OldLibrary {
    // Тут зовсім інша назва методу і порядок аргументів
    public legacyPush(text: string, header: string): void {
        console.log(` Стара бібліотека каже: [${header}] -> ${text}`);
    }
}