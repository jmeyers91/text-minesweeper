import readline from 'readline';
import { EventEmitter } from 'events';

readline.emitKeypressEvents(process.stdin);
if (process.stdin.setRawMode) {
  process.stdin.setRawMode(true);
}

export default class Controls extends EventEmitter {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    process.stdin.on('keypress', this.handleKeyPress);
  }

  detach() {
    this.removeAllListeners();
    process.stdin.off('keypress', this.handleKeyPress);
  }

  handleKeyPress(key: any, event: { ctrl: boolean; name: string }) {
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
        case 'f':
          this.emit('flag');
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
