import { createAction } from '@reduxjs/toolkit'

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching);
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = (request) => (dispatch) => {
    dispatch('HEROES_FETCHING');
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}


// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

export const heroesFetched = createAction('HEROES_FETCHED')


// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')


// export const addHeroe = (data) => {
//     return {
//         type: 'ADD_HEROE',
//         payload: data
//     }
// }

export const addHeroe = createAction('ADD_HEROE')

// export const removeHeroe = (id) => {
//     return {
//         type: 'REMOVE_HEROE',
//         payload: id
//     }
// }

export const removeHeroe = createAction('REMOVE_HEROE')

// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHEDING'
//     }
// }

export const filtersFetching = createAction('FILTERS_FETCHEDING')

// export const filtersFetched = (data) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: data
//     }
// }

export const filtersFetched = createAction('FILTERS_FETCHED')

// export const activeFilterChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }

export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED')

// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR')