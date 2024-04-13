import { configureStore } from '@reduxjs/toolkit'

import categoriesSlice from './categories/categoriesSlice'

export const store = configureStore({
    reducer: {
      categories : 'categoriesSlice'
    },
    devTools : true,
  })

// export default store

// import { configureStore } from '@reduxjs/toolkit'
// import categoriesSlice from './categories/categoriesSlice'
// import cartSlice from './cart/cartSlice'
