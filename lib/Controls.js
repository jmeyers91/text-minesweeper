"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const events_1 = require("events");
readline_1.default.emitKeypressEvents(process.stdin);
if (process.stdin.setRawMode) {
    process.stdin.setRawMode(true);
}
class Controls extends events_1.EventEmitter {
    constructor() {
        super();
        this.handleKeyPress = this.handleKeyPress.bind(this);
        process.stdin.on('keypress', this.handleKeyPress);
    }
    detach() {
        this.removeAllListeners();
        process.stdin.off('keypress', this.handleKeyPress);
    }
    handleKeyPress(key, event) {
        if (event.ctrl && event.name === 'c') {
            this.emit('quit');
            return;
        }
        if (typeof key === 'string') {
            switch (key.toLowerCase()) {
                case 'w':
                    this.emit('up');
                    break;
                case 'a':
                    this.emit('left');
                    break;
                case 's':
                    this.emit('down');
                    break;
                case 'd':
                    this.emit('right');
                    break;
                case ' ':
                    this.emit('open');
                    break;
                case '\r':
                    this.emit('restart');
                    break;
            }
        }
    }
}
exports.default = Controls;
