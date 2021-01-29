import * as api from "../api/api"
import {
  GET_FIRST_TWO_ARTICLES,
  GET_OTHERS_ARTICLES,
  GRT_ARTICLE_BY_ID,
  HANDLE_ARTICLE_LIKES,
  CLEAR_ARTICLE_DATA,
} from "../constants/articleConstants"



export const latestNews = () => ({
  type: GET_FIRST_TWO_ARTICLES,
  payload: api.latestNews(),
})

export const otherNews = () => ({
  type: GET_OTHERS_ARTICLES,
  payload: api.otherNews(),
})

export const getArticleById = (id) => ({
  type: GRT_ARTICLE_BY_ID,
  payload: api.getArticleById(id),
})

export const handleArticleLikes = (id, newLikes) => ({
  type: HANDLE_ARTICLE_LIKES,
  payload: api.handleArticleLikes(id, newLikes),
})

export const clearArticleData = () => ({
  type: CLEAR_ARTICLE_DATA,
  payload: null,
})