import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Card from '../components/Card';

const testData = {
  id: 1,
  name: 'Freetown',
  population: '7,000,000',
  moreInfo: {
    cityImage: 'test.png',
  },
};

describe('Testing Card component', () => {
  test('renders a message', () => {
    const { getByTestId } = render(<Card data={testData} />);
    expect(getByTestId('city-image')).toBeInTheDocument();
    expect(getByTestId('city-name')).toBeInTheDocument();
    expect(getByTestId('city-population')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(<Card data={testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
