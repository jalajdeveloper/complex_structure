

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:4001](http://localhost:4001).

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\






## Architectural decisions
There is two apis one is post api with /add-to-watch-list with end point where by sending the movie id in request it save's it in the db and other is get api with end point /check-watch-list/:movieId where user can check in movie exist in watched list or not.

## Design assumptions made
I made assumption that i should use get api to check in movie exist in watch list or not.