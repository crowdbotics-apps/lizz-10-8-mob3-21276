import axios from "axios"
const dogAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorhjgfhjg = axios.create({
  baseURL: "https://app.crowdbotics.com/dashboard/app/20130/storyboard/99273/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogapi_get_breeds_image_random_read(action) {
  return dogAPI.get(`/breeds/image/random`)
}
export const apiService = { dogapi_get_breeds_image_random_read }
