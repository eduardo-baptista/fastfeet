import createRouter from './routes';

const App = () => {
  const signed = false;

  return createRouter(signed);
};

export default App;
