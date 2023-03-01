

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

export const removeHeroe = (data, id) => {

    data.findIndex(item => item.id === id)
    console.log(data)
    return {
        type: 'REMOVE_HEROE',
        payload: data
    }
}