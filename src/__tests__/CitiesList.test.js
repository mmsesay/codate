import { getCurrentState, setData } from '../utils/mockedFunction';

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
});
