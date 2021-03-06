import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getCurrentState, mockData } from '../utils/mockedFunction';
import CityDetails from '../components/CityDetails';

describe('Testing single city detail', () => {
  test('Single city found', () => {
    const payload = { id: 1 };

    const { state } = getCurrentState();
    state.forEach((object) => {
      if (object.id === payload.id) {
        expect(object.name).toEqual('Freetown');
      }
    });
  });

  test('renders correct element', () => {
    const { getByTestId } = render(<Router><CityDetails data={mockData} /></Router>);
    expect(getByTestId('city-details-container')).toBeInTheDocument();
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Router><CityDetails data={mockData} /></Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
