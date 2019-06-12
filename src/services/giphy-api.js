const key = 'mEaFuMZ2jY0KYICyCKznCcr84R85m26E';

export const getGiphs = (searchTerm) => {
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=20`, {
    method: 'GET',
    headers: {
      'Content-Type': 'accept: image/*'
    }
  })
    .then(res => res.json())
    .then(giphs => giphs.data);
};
