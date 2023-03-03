import chalk from 'chalk';

export default class Logger {
  constructor(loggable, default_prefix, default_color, script_name) {
    this._log = console.log;
    this._loggable = loggable;
    this._default_prefix = default_prefix;
    this._default_color = default_color;
    this._script_name = script_name;
  }

  log(message, type) {
    var prefix = this._default_prefix;
    var color = this._default_color;

    switch (type) {
        case 'error':
            prefix = '!';
            color = 'red';
            break;
        case 'warning':
            prefix = '#';
            color = 'yellow';
            break;
        case 'success':
            prefix = '+';
            color = 'green';
            break;
        case 'info':
            prefix = 'i';
            color = 'blue';
            break;
        case 'debug':
            prefix = '*';
            color = 'magenta';
            break;
        default:
            prefix = this._default_prefix || '?';
            color = this._default_color || 'white';
            break;
    }

    if (this._loggable) {
        this._log(chalk[color](`[${this._script_name}]:[${prefix}] "${message}"`));
    }
  }
}