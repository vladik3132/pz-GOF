import { YouTubeChannel } from './YouTubeChannel';
import { User } from './User';

const myChannel = new YouTubeChannel();

const vlad = new User("Влад");
const petro = new User("Петро");
const ivan = new User("Іван");
const Andriy = new User("Андрій");
myChannel.subscribe(vlad);
myChannel.subscribe(petro);
myChannel.subscribe(ivan);
myChannel.subscribe(Andriy);

myChannel.uploadVideo("Як вивчити Патерни за 5 хвилин");

console.log("\n--- Петро вирішив відписатися ---");
myChannel.unsubscribe(petro);

myChannel.uploadVideo("Git для новачків: виправляємо 403 помилку");