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

  handleKeyPress(_: any, event: { ctrl: boolean; name: string }) {
    if (!event) {
      return;
    }

    switch (true) {
      case event.name === 'w' || event.name === 'up':
        this.emit('up');
        break;
      case event.name === 'a' || event.name === 'left':
        this.emit('left');
        break;
      case event.name === 's' || event.name === 'down':
        this.emit('down');
        break;
      case event.name === 'd' || event.name === 'right':
        this.emit('right');
        break;
      case event.name === 'f':
        this.emit('flag');
        break;
      case event.name === 'space':
        this.emit('open');
        break;
      case event.name === 'return':
        this.emit('restart');
        break;
      case (event.ctrl && event.name === 'c') || event.name === 'q':
        this.emit('quit');
        break;
    }
  }
}
