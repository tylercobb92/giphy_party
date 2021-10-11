console.log("Let's get this party started!");
const $search = $('#searchTerm')


$('form').on('submit', async function (e) {
    e.preventDefault();

    let searchTerm = $search.val();
    $search.val('');

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'lMBjWCtuNP1Iq5tXNAZLbnJP5QbSI09w'
        }
    });
    console.log(response);
})