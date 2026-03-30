import { Settings } from './Settings';

export function logCurrentLanguage() {
    const settings = Settings.getInstance();
    console.log(` Logger бачить мову: ${settings.language}`);
}