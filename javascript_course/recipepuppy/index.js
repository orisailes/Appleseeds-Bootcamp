async function fetchingData(url) {
    const response = await fetch(url);
    const data = response.json();
    console.log(data)
}

const endpoing = `http://www.recipepuppy.com/api`

fetchingData(endpoing)

