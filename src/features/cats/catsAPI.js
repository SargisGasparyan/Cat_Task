// A mock function to mimic making an async request for data
export function loadCats(id){
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
        .then(response => response.json())
        .then(json => json)
  }