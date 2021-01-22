import Axios from 'axios';
export const clientErrorMessage =
  'Could not send request. Kindly check your internet connection';

export const delay = (time = 4000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const retrieveToken = async () => {
  const response = await Axios.get('/api/user-details');
  console.log('axios response', response);
  return response.data;
};
