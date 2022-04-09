// A mock function to mimic making an async request for data
export function loadCategories(){
  return fetch('https://api.thecatapi.com/v1/categories ')
      .then(response => response.json())
      .then(json => json)
}