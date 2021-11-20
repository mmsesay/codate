import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import { getCurrentState, setData, mockData } from '../utils/mockedFunction';
import CitiesList from '../components/CitiesList';

describe('Testing cities list', () => {
  test('Storing new data into the store ', () => {
    const payload = {
      id: 4,
      name: 'Cairo',
      population: '12,000,000',
      country: 'Egypt',
      timeZone: 'Africa',
      moreInfo: {
        cityImage: 'test.png',
      },
    };

    setData(payload);
  });

  test('Data is present in the store ', () => {
    const { state } = getCurrentState();
    expect(state.length).toEqual(4);
  });

  test('renders correct element', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router><CitiesList result={mockData} /></Router>
      </Provider>,
    );
    expect(getByTestId('cities-container')).toBeInTheDocument();
  });

  test('Renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <CitiesList results={mockData} />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
