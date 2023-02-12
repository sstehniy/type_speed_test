import { useEffect, useState } from 'react';
const text = 'Typing Guru'.split('');

function Logo() {
  const [currentText, setCurrentText] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const [allowTextAppear, setAllowTextAppear] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAllowTextAppear(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!allowTextAppear) return;
    let i = 0;
    setCurrentText([]);

    const interval = setInterval(() => {
      if (i < text.length) {
        setCurrentText((prev) => [...prev, text[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCursorVisible(false);
        }, 200);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      setCursorVisible(true);
    };
  }, [allowTextAppear]);
  return (
    <div className="logo text-xl sm:text-3xl relative">
      <div
        className={`logo-text relative  text-slate-900 dark:text-slate-200 pb-1`}
        style={{ letterSpacing: 3 }}
      >
        <span>{currentText.join('')}</span>
        {cursorVisible && <div className="logo-cursor"></div>}
      </div>
    </div>
  );
}

export default Logo;
