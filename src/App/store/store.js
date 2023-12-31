import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import ressourcesReducer, { fetchAllRessources } from './ressourcesSlice'

const store = configureStore({
    reducer:combineReducers({
        ressources:ressourcesReducer,
        current:currentReducer
    }),
    devTools:true
})

export default store

store.dispatch(fetchAllRessources())