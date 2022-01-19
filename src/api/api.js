const BASE_URL = 'https://api.spacexdata.com/v3/';

export const getData = () => {
  const response = fetch(`${BASE_URL}launches`);
  
  return response;
};
