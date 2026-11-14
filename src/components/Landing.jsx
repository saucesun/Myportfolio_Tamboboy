import { useEffect, useState } from 'react';
import { TYPED_PHRASES } from '../data.js';

const pad = (n) => String(n).padStart(2, '0');

function useTyped(phrases) {
  const [text, setText] = useState('');

  useEffect(() => {
    let pIdx = 0;
    let cIdx = 0;
    let deleting = false;
    let timer;

    const loop = () => {
      const phrase = phrases[pIdx];
      if (!deleting) {
        cIdx++;
        setText(phrase.slice(0, cIdx));
        if (cIdx === phrase.length) {
          deleting = true;
          timer = setTimeout(loop, 2200);
          return;
        }
      } else {
        cIdx--;
        setText(phrase.slice(0, cIdx));
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
        }
      }
      timer = setTimeout(loop, deleting ? 35 : 60);
    };
    loop();

    return () => clearTimeout(timer);
  }, [phrases]);

  return text;
}

function useUptime() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return `${pad(Math.floor(sec / 3600))}:${pad(Math.floor((sec % 3600) / 60))}:${pad(sec % 60)}`;
}

export default function Landing({ active }) {
  const typed = useTyped(TYPED_PHRASES);
  const uptime = useUptime();

  return (
    <section id="landing" className={`section${active ? ' active' : ''}`}>
      <div className="landing-hud hud-tl"><span>SEC://ENCRYPTED</span><span>VER 2.4.0</span></div>
      <div className="landing-hud hud-tr"><span>ID: 0x7F3A</span><span>LVL: ADMIN</span></div>
      <div className="landing-hud hud-bl">
        <span>LOC: 14.5995 / 120.9842</span>
        <span>UPTIME: <span id="uptime">{uptime}</span></span>
      </div>
      <div className="landing-hud hud-br"><span>MEM: OK</span><span>NET: STABLE</span></div>
      <div className="landing-content">
        <div className="landing-tag">&lt; SYSTEM_INITIALIZED /&gt;</div>
        <h1 className="landing-title">MY PORTFOLIO</h1>
        <p className="landing-sub" id="landing-typed">{typed}</p>
        <div className="landing-stats">
          <span><b>04</b> MODULES</span>
          <span><b>&infin;</b> POSSIBILITIES</span>
          <span><b>100%</b> SECURE</span>
        </div>
      </div>
      <div className="scroll-hint"><span>SCROLL</span><div className="scroll-line"></div></div>
    </section>
  );
}
