import * as React from 'react';
import RootContainer from './containers/RootContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';

const store = createStore(reducer);

export default class ReduxCounterUniversal extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
