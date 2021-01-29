import axios from "axios"
import { URL_ARTICLES } from "../../../path"


// Get last two articles 
export const latestNews = async () => {
    try {
        const { data } = await axios.get(`${URL_ARTICLES}?_order=desc&_end=2`) //Last two article
        return data
        
    } catch (err) {
        console.log(err.message)
    }
}

// Get articles before last two articles
export const otherNews = async () => {
  try {
    const { data } = await axios.get(`${URL_ARTICLES}?_order=desc&_start=2&_end=15`) // Skip first 2 and start from 3 end with 15
      return data
      
  } catch (err) {
    console.log(err.message)
  }
}

// Get article by id
export const getArticleById = async (id) => {
  try {
    const { data } = await axios.get(`${URL_ARTICLES}?id=${id}`)
    return data

  } catch (err) {
    console.log(err.message)
  }
}

// Update Likes
export const handleArticleLikes = async (id, newLikes) => {
  try {
    const { data } = await axios(`${URL_ARTICLES}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ likes: newLikes })
    })
    return data

  } catch (err) {
    console.log(err.message)
  }
}

