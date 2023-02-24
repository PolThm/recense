import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { FC } from 'react';

import Counter from '@/components/Counter';

const HomePage: FC = () => {
  return (
    <>
      <Typography
        className="text-3xl font-bold underline"
        color="primary.dark"
        variant="h1"
      >
        Home
      </Typography>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/src/assets/images/vite.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <AddIcon style={{ textAlign: 'center', height: '100px' }} />
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src="/src/assets/images/react.svg"
            className="logo"
            alt="React logo"
          />
        </a>
        <AddIcon style={{ textAlign: 'center', height: '100px' }} />
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/src/assets/images/TS.svg"
            className="logo"
            alt="TypeScript logo"
          />
        </a>
        <AddIcon style={{ textAlign: 'center', height: '100px' }} />
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img
            src="/src/assets/images/redux.svg"
            className="logo"
            alt="Redux logo"
          />
        </a>
        <AddIcon style={{ textAlign: 'center', height: '100px' }} />
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          <img
            src="/src/assets/images/mui.svg"
            className="logo"
            alt="MUI logo"
          />
        </a>
        <AddIcon style={{ textAlign: 'center', height: '100px' }} />
        <a
          href="https://github.com/theWhiteFox/Vite-React-TS-Redux-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/src/assets/images/octocat.svg"
            className="logo"
            alt="GitHub logo"
          />
        </a>
      </div>
      <div className="card">
        <Counter />
      </div>
    </>
  );
};

export default HomePage;
