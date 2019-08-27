import axios from 'axios'

let key = process.env.REACT_APP_Y_KEY

//citation: https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5
//constant inputs
let source = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
let limit = '6';
let open = 'true'
let category = 'japanese'

const getData = async (lat,lon,radius,sort) => {
  let response = await axios.get(`${source}?latitude=${lat}&longitude=${lon}&radius=${radius}&sort_by=${sort}&limit=${limit}&categories=${category}&open_now=${open}`, {
    headers:{
      Authorization: `Bearer ${key}`}
    });
  return response
}

export default getData
