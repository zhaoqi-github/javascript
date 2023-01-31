import { Subject } from './subject.js';
import { Observer } from './observer.js';

const subject = new Subject();
const observer = new Observer('hh');
const observer1 = new Observer('xx');

subject.add(observer);
subject.add(observer1);

subject.notify();
