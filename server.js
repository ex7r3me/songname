import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const clientId = process.env.CLIENT_ID; 
const clientSecret = process.env.CLIENT_SECRET; 
async function getAccessToken(clientId, clientSecret) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

function getTrackId(spotifyUrl) {
    const regex = /https:\/\/open.spotify.com\/track\/([a-zA-Z0-9]+)/;
    const match = spotifyUrl.match(regex);
    if (match) {
        return match[1];
    } else {
        throw new Error('Invalid Spotify URL');
    }
}

async function getTrackDetails(accessToken, trackId) {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const track = await response.json();
    const trackName = track.name;
    const artistName = track?.artists?.map(artist => artist.name).join(', '); // Handling multiple artists
    return { trackName, artistName };
}

app.post('/get-track-details', async (req, res) => {
    const { spotifyUrl } = req.body;

    try {
        const accessToken = await getAccessToken(clientId, clientSecret);
        const trackId = getTrackId(spotifyUrl);
        const { trackName, artistName } = await getTrackDetails(accessToken, trackId);
        res.json({ trackName, artistName });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
