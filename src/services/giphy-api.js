const key = 'mEaFuMZ2jY0KYICyCKznCcr84R85m26E';

export const getGiphs = (searchTerm) => {
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=10`)
    .then(res => res.json())
    .then(giphs => giphs.data);
};
