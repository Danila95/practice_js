import { createReducer } from "@reduxjs/toolkit"

import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    addHeroe,
    removeHeroe
} from '../actions'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = createReducer(initialState, {
            [heroesFetching]: state => {state.heroesLoadingStatus = 'loading'},
            [heroesFetched]: (state, action) => {
                            state.heroesLoadingStatus = 'idle'
                            state.heroes = action.payload
                        },
            [heroesFetchingError]: state => {state.heroesLoadingStatus = 'error'},
            [addHeroe]: (state, action) => {state.heroes.push(action.payload)},
            [removeHeroe]: (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)}
        },
    [],
    state => state
)

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading'
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle'
//             state.heroes = action.payload
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error'
//         })
//         .addCase(addHeroe, (state, action) => {
//             state.heroes.push(action.payload)
//         })
//         .addCase(removeHeroe, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload)
//         })
//         .addDefaultCase(() => {})
// })

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'ADD_HEROE':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         case 'REMOVE_HEROE':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload)
//             }
//         default: return state
//     }
// }

export default heroes;