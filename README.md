
# Spotify Track Details

This project is a simple web application that retrieves the details of a Spotify track, including the track name and artist name, from a Spotify URL. It also provides links to search for the track and artist on Google and YouTube.

## Features

- Fetch Spotify track details using Spotify's Web API.
- Display track name and artist name.
- Provide links to search for the track and artist on Google and YouTube.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/spotify-track-details.git
    cd spotify-track-details
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Spotify API credentials:

    ```
    CLIENT_ID=your_client_id_here
    CLIENT_SECRET=your_client_secret_here
    ```

## Running the Application

### Development

To run the application in development mode with auto-reload:

```bash
npm run dev
```

### Production

To run the application in production mode:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## Deployment on Vercel

1. Login to your Vercel account.
2. Import the project from your Git repository.
3. In your Vercel project settings, add the following environment variables:
    - `CLIENT_ID`
    - `CLIENT_SECRET`
4. Deploy the project.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter a Spotify track URL in the input field and click "Get Track Details".
3. The track name and artist name will be displayed along with links to search for the track and artist on Google and YouTube.

## Project Structure

```
spotify-track-details/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgments

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Node Fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings `window.fetch` to Node.js
