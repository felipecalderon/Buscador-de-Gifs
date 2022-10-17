
const apiKey = process.env.REACT_APP_APIKEY_GIPHY
const cantidad = 12

const Getgifs = ({palabra}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${palabra}&limit=${cantidad}&offset=0&rating=r&lang=es`
      return fetch(url)
        .then(res => res.json())
        .then(respuesta => {
          const {data} = respuesta
          const gifs = data.map(item => {
            const {id, title, images} = item
            const {url} = images.original
            return {title, id, url}
          })
        return gifs
        })
}

export default Getgifs