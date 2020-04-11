import { useSelector } from 'react-redux';
import createRouter from './routes';

const App = () => {
  const signed = useSelector((state) => state.auth.signed);

  return createRouter(signed);
};

export default App;
