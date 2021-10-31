# Brij Lite

## Project setup

* Clone repository
* run `npm install`
* start server `node server.js`

## Handling CORs errors on localhost

I was having CORs issues trying to fetch data from endpoints (e.g., `https://fir-hosting-app-clip.web.app/.well-known/api/2.json`). 

I got around this by using a local proxy server to send requests through. The proxy runs on port 8080 (by default). Setup is as follows:

* `git clone git@github.com:Rob--W/cors-anywhere.git`
* `cd` into directory
* run `node server.js`

Now when you `fetch` on a url, put `http://localhost:8080/` in front of your request. (e.g., `https://fir-hosting-app-clip.web.app/.well-known/api/2.json` becomes `http://localhost:8080/https://fir-hosting-app-clip.web.app/.well-known/api/2.json`)

# Typescript setup but not really being used

# SASS

This project uses `atomic-scss`

However, I started from a configuration I already had around, and which needs to be cleaned up quite a bit.
