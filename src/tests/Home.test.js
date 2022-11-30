import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/configureStore';

describe('Missions', () => {
  it('It has to render the landing page', () => {
    const home = render(
      <>
        <Provider store={store}>
          <Home />
        </Provider>
      </>,
    );
    expect(home).toMatchSnapshot();
  });
});
