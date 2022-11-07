import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export type KeyStroke = {
  char: string
  alt?: boolean
  ctrl?: boolean
  shift?: boolean
}

export const useKeyPress = (keys: KeyStroke, callback: (e: KeyboardEvent) => void, node: HTMLElement | null = null) => {
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  if (!keys.alt) keys.alt = false
  if (!keys.ctrl) keys.ctrl = false
  if (!keys.shift) keys.shift = false

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      // check if one of the key is part of the ones we want
      if (
        event.key === keys.char && 
        event.altKey === keys.alt &&
        event.ctrlKey === keys.ctrl &&
        event.shiftKey === keys.shift
      ) {
        callbackRef.current(event);
      }
    },
    [keys]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode &&
      targetNode.addEventListener("keydown", handleKeyPress as EventListener);

    // remove the event listener
    return () =>
      targetNode &&
        targetNode.removeEventListener("keydown", handleKeyPress as EventListener);
  }, [handleKeyPress, node]);
};