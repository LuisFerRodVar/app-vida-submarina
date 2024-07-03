const URL = 'http://10.0.2.2:8080/api/'; 
export async function getNews() {
  return await fetch(URL + 'news', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())

}
