const $search = $('#searchTerm')
const $gifSpace = $('.gifSpace')

function appendGif(res) {
    let numGifs = res.data.length;
    if (numGifs) {
        let randomGif = Math.floor(Math.random() * numGifs);
        let $newGif = $('<img>', {
            src: res.data[randomGif].images.original.url
        })
        $gifSpace.append($newGif);
    }
}

$('form').on('submit', async function (e) {
    e.preventDefault();

    let searchTerm = $search.val();

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'lMBjWCtuNP1Iq5tXNAZLbnJP5QbSI09w',
        }
    });
    console.log(response.data);
    appendGif(response.data);
    $search.val('');

})

$('#removeBtn').on('click', function () {
    $search.val('');
    $gifSpace.empty();
})