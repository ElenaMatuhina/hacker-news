import { ALL_NEWS, DETAIL_NEWS } from "../config"

const getResponse = response =>
  response.ok ? response.json() : Promise.reject(response.status)

const getNewsAllIds = async () => {
  const response = await fetch(ALL_NEWS)
  return getResponse(response)
}

const getItem = async id => {
  const response = await fetch(DETAIL_NEWS(id))
  return getResponse(response)
}

export { getNewsAllIds, getItem }
