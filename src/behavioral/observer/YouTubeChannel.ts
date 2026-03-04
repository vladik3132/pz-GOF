import { ISubscriber } from './ISubscriber';


export class YouTubeChannel {
    private subscribers: ISubscriber[] = [];

    subscribe(user: ISubscriber): void {
        console.log(`+ Додано підписника.`);
        this.subscribers.push(user);
    }

    unsubscribe(user: ISubscriber): void {
        this.subscribers = this.subscribers.filter(s => s !== user);
    }

    uploadVideo(title: string): void {
        console.log(`нове відео: "${title}"`);
        this.subscribers.forEach(s => s.update(title));
    }
}