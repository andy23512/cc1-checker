import { ACTIONS } from './actions.const';
import { WritingSystemKeyCode } from './writing-system-key-code.models';

export const KEY_LIST: Record<
  number,
  { code: WritingSystemKeyCode; shiftKey: boolean }
> = {
  0: { code: 'KeyA', shiftKey: false },
  1: { code: 'KeyB', shiftKey: false },
  2: { code: 'KeyC', shiftKey: false },
  3: { code: 'KeyD', shiftKey: false },
  4: { code: 'KeyE', shiftKey: false },
  5: { code: 'KeyF', shiftKey: false },
  6: { code: 'KeyG', shiftKey: false },
  7: { code: 'KeyH', shiftKey: false },
  8: { code: 'KeyI', shiftKey: false },
  9: { code: 'KeyJ', shiftKey: false },
  10: { code: 'KeyK', shiftKey: false },
  11: { code: 'KeyL', shiftKey: false },
  12: { code: 'KeyM', shiftKey: false },
  13: { code: 'KeyN', shiftKey: false },
  14: { code: 'KeyO', shiftKey: false },
  15: { code: 'KeyP', shiftKey: false },
  16: { code: 'KeyQ', shiftKey: false },
  17: { code: 'KeyR', shiftKey: false },
  18: { code: 'KeyS', shiftKey: false },
  19: { code: 'KeyT', shiftKey: false },
  20: { code: 'KeyU', shiftKey: false },
  21: { code: 'KeyV', shiftKey: false },
  22: { code: 'KeyW', shiftKey: false },
  23: { code: 'KeyX', shiftKey: false },
  24: { code: 'KeyY', shiftKey: false },
  25: { code: 'KeyZ', shiftKey: false },
  26: { code: 'Digit0', shiftKey: false },
  27: { code: 'Digit1', shiftKey: false },
  28: { code: 'Digit2', shiftKey: false },
  29: { code: 'Digit3', shiftKey: false },
  30: { code: 'Digit4', shiftKey: false },
  31: { code: 'Digit5', shiftKey: false },
  32: { code: 'Digit6', shiftKey: false },
  33: { code: 'Digit7', shiftKey: false },
  34: { code: 'Digit8', shiftKey: false },
  35: { code: 'Digit9', shiftKey: false },
  36: { code: 'Minus', shiftKey: false },
  37: { code: 'Equal', shiftKey: false },
  38: { code: 'BracketLeft', shiftKey: false },
  39: { code: 'BracketRight', shiftKey: false },
  40: { code: 'Semicolon', shiftKey: false },
  41: { code: 'Quote', shiftKey: false },
  42: { code: 'Comma', shiftKey: false },
  43: { code: 'Period', shiftKey: false },
  44: { code: 'Slash', shiftKey: false },
  45: { code: 'KeyA', shiftKey: true },
  46: { code: 'KeyB', shiftKey: true },
  47: { code: 'KeyC', shiftKey: true },
  48: { code: 'KeyD', shiftKey: true },
  49: { code: 'KeyE', shiftKey: true },
  50: { code: 'KeyF', shiftKey: true },
  51: { code: 'KeyG', shiftKey: true },
  52: { code: 'KeyH', shiftKey: true },
  53: { code: 'KeyI', shiftKey: true },
  54: { code: 'KeyJ', shiftKey: true },
  55: { code: 'KeyK', shiftKey: true },
  56: { code: 'KeyL', shiftKey: true },
  57: { code: 'KeyM', shiftKey: true },
  58: { code: 'KeyN', shiftKey: true },
  59: { code: 'KeyO', shiftKey: true },
  60: { code: 'KeyP', shiftKey: true },
  61: { code: 'KeyQ', shiftKey: true },
  62: { code: 'KeyR', shiftKey: true },
  63: { code: 'KeyS', shiftKey: true },
  64: { code: 'KeyT', shiftKey: true },
  65: { code: 'KeyU', shiftKey: true },
  66: { code: 'KeyV', shiftKey: true },
  67: { code: 'KeyW', shiftKey: true },
  68: { code: 'KeyX', shiftKey: true },
  69: { code: 'KeyY', shiftKey: true },
  70: { code: 'KeyZ', shiftKey: true },
  71: { code: 'Digit0', shiftKey: true },
  72: { code: 'Digit1', shiftKey: true },
  73: { code: 'Digit2', shiftKey: true },
  74: { code: 'Digit3', shiftKey: true },
  75: { code: 'Digit4', shiftKey: true },
  76: { code: 'Digit5', shiftKey: true },
  77: { code: 'Digit6', shiftKey: true },
  78: { code: 'Digit7', shiftKey: true },
  79: { code: 'Digit8', shiftKey: true },
  80: { code: 'Digit9', shiftKey: true },
  81: { code: 'Minus', shiftKey: true },
  82: { code: 'Equal', shiftKey: true },
  83: { code: 'BracketLeft', shiftKey: true },
  84: { code: 'BracketRight', shiftKey: true },
  85: { code: 'Semicolon', shiftKey: true },
  86: { code: 'Quote', shiftKey: true },
  87: { code: 'Comma', shiftKey: true },
  88: { code: 'Period', shiftKey: true },
  89: { code: 'Slash', shiftKey: true },
};

export const STUB_KEY_MAP: Record<number, number> = Object.fromEntries(
  new Array(90).fill(null).map((_, i) => {
    const key = KEY_LIST[i];
    const actionId = ACTIONS.find(
      (a) =>
        a.keyboardEvent?.code === key.code &&
        a.keyboardEvent?.shiftKey === key.shiftKey
    )?.codeId as number;
    return [i, actionId];
  })
);