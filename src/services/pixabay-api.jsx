

function fetchImages(query, page){
   const BASE_URL = 'https://pixabay.com/api/?';
   const MY_KEY = '34900621-acb9776efa6b0b3f8d58bb60a';
    return fetch(`${BASE_URL}key=${MY_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
        if (response.ok) {
          return response.json();
        }
    
       return Promise.reject(new Error(`Нет image ${query}`));
      });
    }
    
    const api = {
      fetchImages,
    };
    
    export default api;


