//Конкретний спостерігач, Слухач 1: оновлює інтерфейс 

import { IObserver } from './IObserver';

export class AdminDashboard implements IObserver {
    update(status: string): void {
        console.log(`[Observer - AdminPanel] Оновлення статусу: ${status}`);
    }
}























/*
// src/behavioral/observer/AdminDashboard.ts
import { IObserver } from './IObserver';

export class AdminDashboard implements IObserver {
    update(status: string): void {
        console.log(`[Observer - AdminPanel] ${status}`);
    }
} 
    */