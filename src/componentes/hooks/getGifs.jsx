
const apiKey = 'srOjDE0i4ysRJDQgv0R28T71HWgffWX7'
const cantidad = 12

const Getgifs = ({palabra, setCargando}) => {
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
        setCargando(false)
         return gifs
        })
}

export default Getgifs