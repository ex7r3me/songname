async function fetchTrackDetails() {
    const spotifyUrl = document.getElementById('spotifyUrl').value;

    const response = await fetch('/api/get-track-details', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ spotifyUrl })
    });

    const result = await response.json();

    if (response.ok) {
        const { trackName, artistName } = result;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(trackName + ' ' + artistName)}`;
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(trackName + ' ' + artistName)}`;

        document.getElementById('result').innerHTML = `
            <p><strong>Track Name:</strong> ${trackName}</p>
            <p><strong>Artist Name:</strong> ${artistName}</p>
            <p><a href="${googleSearchUrl}" target="_blank">Search on Google</a></p>
            <p><a href="${youtubeSearchUrl}" target="_blank">Search on YouTube</a></p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>Error: ${result.error}</p>`;
    }
}
