export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}


export const addHeroe = (data) => {
    return {
        type: 'ADD_HEROE',
        payload: data
    }
}

export const removeHeroe = (id) => {
    return {
        type: 'REMOVE_HEROE',
        payload: id
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHEDING'
    }
}

export const filtersFetched = (data) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: data
    }
}

export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}