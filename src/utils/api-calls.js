export default function fetcher(){
    return fetch(...args)
        .then(response => response.json())
        .then(json => console.log(json))
}