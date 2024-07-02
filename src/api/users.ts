const URL = 'http://10.0.2.2:8080/api/'; 
export async function login(username: string, password: string) {
  let data = {email: username, password: password, username: "", email_2:""};
  
  try {
    const response = await fetch(URL + 'login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. Server response: ${errorText}`);
    }

    return await response.text();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}
export async function register(username: string, password: string, email: string) {
  let data = {email: email, password: password, username: username, email_2: ""};
  
  try {
    const response = await fetch(URL + 'users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. Server response: ${errorText}`);
    }

    return await response.text();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

