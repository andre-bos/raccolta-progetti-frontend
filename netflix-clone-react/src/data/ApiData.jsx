const apiKey = '2a543a16'
const searchParam = 's'
const searchValue = 'harry%20potter'
const endPoint = `http://www.omdbapi.com/?apikey=${apiKey}&${searchParam}=${searchValue}`

console.log('Questo è endpoint: ' + endPoint)

export { endPoint}