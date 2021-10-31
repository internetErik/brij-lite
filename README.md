# Brij Lite

## Project setup

* Clone repository and `cd` into it
* run `npm install`
* run `npx webpack` (enjoy the ts errors)
* start server `node server.js`
* in your browser, go to `http://localhost:3000`

You should now be greeted by a 'product not found' page message. Chances are if you go to `/1` it won't work. The following section explains why.

## Handling CORs errors on localhost

I was having CORs issues trying to fetch data from endpoints (e.g., `https://fir-hosting-app-clip.web.app/.well-known/api/2.json`). 

I got around this by using a local proxy server to send requests through. The proxy runs on port 8080 (by default). Setup is as follows:

* `git clone git@github.com:Rob--W/cors-anywhere.git`
* `cd` into directory
* run `node server.js`

Now when you `fetch` on a url, put `http://localhost:8080/` in front of your request. (e.g., `https://fir-hosting-app-clip.web.app/.well-known/api/2.json` becomes `http://localhost:8080/https://fir-hosting-app-clip.web.app/.well-known/api/2.json`)

If you don't need the proxy you'll need to modify the code. I have a line commented out in `src/pages/Product.tsx` within the `fetchData` function (around line 21). Comment out the fetch line above and uncomment this.

# SASS

This project uses `atomic-scss`

However, I started from a configuration I already had around, and which needs to be cleaned up quite a bit.
