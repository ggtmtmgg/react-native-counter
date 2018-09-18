import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootContainer from './containers/RootContainer';
import reducer from './redux/reducers';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
