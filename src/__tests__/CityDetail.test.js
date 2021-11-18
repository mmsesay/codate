import { getCurrentState } from '../utils/mockedFunction';

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
});