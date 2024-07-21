const apiKey = "opAkPaxV7XBl5dRjiiMeB1jySy3PYePz";

document.getElementById('searchButton').addEventListener('click', () => {
    const term = document.getElementById('searchTerm').value;
    const llamada = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${term}&limit=9&offset=0&rating=g&lang=es&bundle=messaging_non_clips`);
    

    llamada
        .then((response) =>{
        return response.json();
        })
        .then((results) => {
        //let url = results.data [0].images.original.url;
            const gifsContainer = document.querySelector('.gifs');
            gifsContainer.innerHTML = ''; // Limpiar gifs anteriores
            results.data.forEach((element) => {
                let imagen = document.createElement('img');
                imagen.setAttribute('src', element.images.original.url);
                gifsContainer.appendChild(imagen);
            });
        })
        .catch((error) => {
            console.error(error.message);
        });
    });
    

        

        