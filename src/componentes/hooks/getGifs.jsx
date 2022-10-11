const apiKey = 'srOjDE0i4ysRJDQgv0R28T71HWgffWX7'
const cantidad = 10
const Getgifs = ({palabra}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${palabra}&limit=${cantidad}&offset=0&rating=r&lang=es`
      return fetch(url)
        .then(res => res.json())
        .then(respuesta => {
          const {data} = respuesta
          const gifs = data.map(item => item.images.original.url)
         return gifs
        })
}

export default Getgifs