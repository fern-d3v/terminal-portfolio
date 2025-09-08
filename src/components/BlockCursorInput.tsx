import React, { useRef, useEffect, useState } from 'react';

interface BlockCursorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const BlockCursorInput: React.FC<BlockCursorInputProps> = ({
  value,
  onChange,
  inputRef,
  ...props
}) => {
  const localRef = useRef<HTMLInputElement>(null);
  const ref = inputRef || localRef;
  const [caretPos, setCaretPos] = useState(0);
  const [inputRect, setInputRect] = useState<{
    left: number;
    top: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const input = ref.current;
    if (!input) return;
    const handler = () => {
      setCaretPos(input.selectionStart || 0);
      const rect = input.getBoundingClientRect();
      setInputRect({ left: rect.left, top: rect.top, height: rect.height });
    };
    input.addEventListener('keyup', handler);
    input.addEventListener('click', handler);
    handler();
    return () => {
      input.removeEventListener('keyup', handler);
      input.removeEventListener('click', handler);
    };
  }, [ref, value]);

  // Calculate block position
  const getBlockStyle = (): React.CSSProperties => {
    if (!ref.current || inputRect == null) return { display: 'none' };
    const input = ref.current;
    const text = input.value.slice(0, caretPos);
    // Create a dummy span to measure text width
    const span = document.createElement('span');
    span.textContent = text || ' ';
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.font = window.getComputedStyle(input).font;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return {
      left: width + 8,
      top: 4,
      height: inputRect.height - 8,
      position: 'absolute',
      background: 'currentColor',
      width: '0.6em',
      zIndex: 10,
      animation: 'blink-cursor 1s steps(1) infinite',
      pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
    };
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        {...props}
        ref={ref}
        value={value}
        onChange={onChange}
        className={props.className ? props.className + ' block-cursor' : 'block-cursor'}
        style={{ width: '100%' }}
      />
      <span className="block-cursor-overlay" style={getBlockStyle()} />
    </div>
  );
};

export default BlockCursorInput;
