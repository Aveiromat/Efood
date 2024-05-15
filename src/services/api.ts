import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemCardapio } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedClothes: builder.query<ItemCardapio, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<ItemCardapio[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<ItemCardapio[], void>({
      query: () => 'em-breve'
    }),
    getActionClothes: builder.query<ItemCardapio[], void>({
      query: () => 'acao'
    }),
    getSportClothes: builder.query<ItemCardapio[], void>({
      query: () => 'esportes'
    }),
    getSimulationClothes: builder.query<ItemCardapio[], void>({
      query: () => 'simulacao'
    }),
    getFightClothes: builder.query<ItemCardapio[], void>({
      query: () => 'luta'
    }),
    getRpgClothes: builder.query<ItemCardapio[], void>({
      query: () => 'rpg'
    }),
    getItemCardapio: builder.query<ItemCardapio, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedClothesQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionClothesQuery,
  useGetFightClothesQuery,
  useGetRpgClothesQuery,
  useGetSimulationClothesQuery,
  useGetSportClothesQuery,
  useGetItemCardapioQuery
} = api

export default api
