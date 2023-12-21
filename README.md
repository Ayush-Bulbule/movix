# Movix

### 1. Introduction

**Movix** is a React+Vite App which is kind of OTT platform which uses the TMDB API.

### 2. Features

- Display Movies
- Display Movies by catrgories
- Display Popular Shows/Sitcoms
- View Movie/Sitcom details
- Search Movie
- Play Movie Related Videos

### 3. Tech Stack

Tech Stack used to develop movix:
![Reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### 4. Redux Toolkit
Redux Toolkit Configuration
1. Creating Redux Store
  `store.js` :
  Create a Redux store using Redux Toolkit. Import configureStore and your slice reducer. Configure the store by specifying the reducer for your slice.
  The Redux store is a single, centralized state container for a Redux-powered application in React, providing a predictable and immutable state management solution.
  ```
  import { configureStore } from '@reduxjs/toolkit'
  import homeSlice from './homeSlice'

  export const store = configureStore({
        reducer: {
          home: homeSlice,
      },
  })
  ```

2. Creating Sice  `homeSlice.js` :
  Define a slice reducer using createSlice. Set the initial state and add case reducers for different actions.
  A Redux slice is a self-contained reducer, along with its actions and selectors, that encapsulates a specific piece of the overall application state.
  ```
  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
      url: {},
      genres: {},
  };

  export const homeSlice = createSlice({
      name: 'home',
      initialState,
      reducers: {
          getApiConfiguration: (state, action) => {
              state.url = action.payload;
        },
          getGenres: (state, action) => {
              state.genres = action.payload;
          },
      },
  });
  ```

###  5. Screenshots
**HomePage**
![mvx_1](https://github.com/Ayush-Bulbule/movix/assets/69710917/f0259e6a-112d-4a95-8d6a-b1da8a1c0a7c)
**Movie Filter**
![mvx_2](https://github.com/Ayush-Bulbule/movix/assets/69710917/af348db6-f40f-4581-9f85-d8e6f96952d5)
**Movie Details**
![mvx_3](https://github.com/Ayush-Bulbule/movix/assets/69710917/24a4bcf2-0629-4393-bafb-4227b1f8b131)




