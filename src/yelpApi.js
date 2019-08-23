import axios from 'axios'

let key = process.env.REACT_APP_Y_KEY

//citation: https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5
let source = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

//locational
let lat = '40.74014';
let lon = '-73.9897728999999';
let radius = '1000';
let limit = '50';
//sorting
let distance = 'distance';
let match = 'best_match';
let rating = 'rating';
let review = 'review_count';
//misc
let open = 'true'
let category = 'japanese'


const getData = async () => {
  let response = await axios.get(`${source}?latitude=${lat}&longitude=${lon}&radius=${radius}&limit=${limit}`, {
    headers:{
      Authorization: `Bearer ${key}`}
    });
  return response
}

export default getData
