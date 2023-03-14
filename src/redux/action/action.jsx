import { ADD_MARKET, CHOOSE_LIKED, FETCHED } from "../types"

export const fetched = (products) =>({
type:FETCHED,
payload:products
})

export const addMarket = (product) =>({
type:ADD_MARKET,
payload:product
})

export const chooseLiked = (liked) =>({
type:CHOOSE_LIKED,
payload:liked
})

