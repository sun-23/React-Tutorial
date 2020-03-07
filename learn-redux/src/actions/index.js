export const increment = (number) => {
    return {
        type: 'INCERMENT',
        payload: number
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}