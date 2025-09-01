import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content="fern_d3v — a terminal-style portfolio by Rhyn Hilt. Full‑stack learner building web apps, game dev experiments, and CLI tools." />
        <meta property="og:title" content="fern_d3v — terminal portfolio" />
        <meta property="og:description" content="Terminal-style portfolio by Rhyn Hilt. Full‑stack learner building web apps, game dev experiments, and CLI tools." />
        <meta property="og:url" content="https://fernd3v.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fernd3v.vercel.app/assets/apple-icon-180x180.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="fern_d3v — terminal portfolio" />
        <meta name="twitter:description" content="Terminal-style portfolio by Rhyn Hilt. Full‑stack learner building web apps, game dev experiments, and CLI tools." />
        <meta name="twitter:site" content="@fern_d3v" />
        <meta name="twitter:image" content="https://fernd3v.vercel.app/assets/apple-icon-180x180.png" />
      </Head>

      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
