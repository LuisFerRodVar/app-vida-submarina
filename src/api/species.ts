const URL = 'http://10.0.2.2:8080/api/'; 
export async function getSpecies() {
  return await fetch(URL + 'species', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())

}
