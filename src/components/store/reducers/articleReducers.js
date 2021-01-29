import React from 'react'
import {
  GET_FIRST_TWO_ARTICLES,
  GET_OTHERS_ARTICLES,
  GRT_ARTICLE_BY_ID,
  HANDLE_ARTICLE_LIKES,
  CLEAR_ARTICLE_DATA,
} from "../constants/articleConstants"


 function articleReducers(state={}, action) {
     switch (action.type) {
       case GET_FIRST_TWO_ARTICLES:
         return {
           ...state,
           latestArticles: action.payload,
         }

       case GET_OTHERS_ARTICLES:
         return {
           ...state,
           othersArticles: action.payload,
         }

       case GRT_ARTICLE_BY_ID:
         return {
           ...state,
           articleData: action.payload,
         }

       case HANDLE_ARTICLE_LIKES:
         return {
           ...state,
           articleData: [action.payload],
         }

       case CLEAR_ARTICLE_DATA:
         return {
           ...state,
           articleData: action.payload,
         }

       default:
         return state
     }
}

export default articleReducers
