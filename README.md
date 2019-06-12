# Giphy Search App

Giphy Search is a quick react app used for searching the Giphy API

[Visit Site](https://search-giphy.netlify.com/)

## Author

[Kate Dameron](https://github.com/katedam)

## Get Started

1. Download or clone this repo

2. `npm start`

3. Then point your browser at `http://localhost:7890`

## Project Notes

---

I enjoyed working on this project. Trying to stay within the timeframe of a total of 3 hours was challenging because I wanted to refine the styling of the page a little more. At the same time, I felt empowered to make swift and decisive design choices in order to achieve a responsive layout.

This was one of my favorite coding challenges so far. Using the giphy API was relatively simple. It took a minute to find the correct gif url to use off of the data brought back in the fetch. I ended up finding success with the original url found in the images list.

If I had more time, I would pull the search display component into its own container to handle the `searchTerm` state. Then, I would throw the `searchTerm` into the url search params so that the container for the GiphList could then retrieve the `searchTerm` from `window.location.search`. This would enable users to share a link to a particular search as well as make the search component more reusable.

Additionally, I like having the search input update in real time without having to submit anything but there is a bit of a lag in response so I probably need a `setTimeout` with a `clearTimeout` that will give the user a second to finish typing and then trigger the fetch. I think, if executed correctly, this might make for a smoother transition.
