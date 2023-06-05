

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
In order to handle 1000 requests per-second i used inbuild node module which is cluster . what it'll do is that it'll create the chid processes acoording to the number of cores of cpus.

## Design assumptions made
I made assumption that i should use get api to check in movie exist in watch list or not.

## Note 

This express sever will not work on the free tier services like render or vercel because of the cluster node module . Because they only provide 10% of single cpu core usage. So if you're willing to provide me a paid server so i can make it work. Without cluster its working fine on free tier services.
