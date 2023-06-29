# Recipe Generator

## Packages used

- axios: Handles my REST requests to the api, offers a simpler sintax and handles the errors promise-based
- lodash: Helps me access properties in objects that might not exist with more safety and has utils like debounce that are very usefull
- react-router-dom: Handles the routing in the app
- styled-components: Gives styling to my components with dynamic values based on state or props

## Structure

This project was built using an atomic-design structure. For more information please visit: https://bradfrost.com/blog/post/atomic-web-design/

## API

https://www.themealdb.com/api.php

## Notes

There was some implementation of snapshot and unit testing, mostly on the component: `src/atomic/components/Filters/index.tsx`

## Issues detected

Links to youtube videos, coming from the API, are not available

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`
