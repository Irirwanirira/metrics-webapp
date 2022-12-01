import mockFetch from '../mock/mockFetch';
import store from '../redux/configureStore';
// import DataReducer from '../redux/home/reducer';

const mockData = [{
  Country: 'Afghanistan',
  CountryCode: 'AF',
  Cases: '201503',
  Date: '2022-10-18T00:00:00Z',
  Lat: '33.94',
  Lon: '67.71',
  Status: 'confirmed',
}, {
  Country: 'Albania',
  CountryCode: 'AL',
  Cases: '332673',
  Date: '2022-10-18T00:00:00Z',
  Lat: '41.15',
  Lon: '20.17',
  Status: 'confirmed',
},
];
const toget = {
  0:
{
  Country: 'Afghanistan',
  CountryCode: 'AF',
  Cases: '201503',
  Date: '2022-10-18T00:00:00Z',
  Lat: '33.94',
  Lon: '67.71',
  Status: 'confirmed',

},
  1:
  {
    Country: 'Albania',
    CountryCode: 'AL',
    Cases: '332673',
    Date: '2022-10-18T00:00:00Z',
    Lat: '41.15',
    Lon: '20.17',
    Status: 'confirmed',

  },
  back: false,
  countries: [
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Cases: '201503',
      Date: '2022-10-18T00:00:00Z',
      Lat: '33.94',
      Lon: '67.71',
      Status: 'confirmed',

    },
    {
      Country: 'Albania',
      CountryCode: 'AL',
      Cases: '332673',
      Date: '2022-10-18T00:00:00Z',
      Lat: '41.15',
      Lon: '20.17',
      Status: 'confirmed',
    }],
  loading: false,
};

describe('countries redux state tests', () => {
  it('Should initially set countries to an empty array', () => {
    const state = store.getState().datas;
    expect(state.countries).toEqual([]);
    expect(state.status).toBe(null)
  });

  it('it renders the API ', (() => {
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  }));
});
