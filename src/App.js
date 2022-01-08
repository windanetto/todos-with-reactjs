import { Flex } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Home from './component/Home';
import store from './store/indexStore';

export const App = () => {
  return (
    <Provider store={store}>
      <Flex w='100%'>
        <Home />
      </Flex>
    </Provider>
  );
}

export default App;
