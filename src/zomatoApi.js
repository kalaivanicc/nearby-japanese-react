import axios from 'axios'

let key = process.env.REACT_APP_Z_KEY
let source = 'https://developers.zomato.com/api/v2.1/';

let nycCuisines = 'cuisines?city_id=280'
let nycJp = 'https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=60'
let nycId = 'city_id=280'

let test ='https://developers.zomato.com/api/v2.1/search?lat=40.7233191&lon=-74.00305329999999&radius=100&cuisines=60&sort=real_distance&order=asc'



const getData = async () => {
  let response = await axios.get(test, {headers:{'user-key': key}});
  return response
}

export default getData
