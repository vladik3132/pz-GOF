import { SmartHouse } from './SmartHouse';

const myHome = new SmartHouse();

// Замість того, щоб викликати light.off() та tv.off() окремо:
myHome.leaveHome();