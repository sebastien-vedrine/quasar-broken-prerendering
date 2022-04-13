# Prerendering not working when using styled components 

## Installation
```bash
yarn install
```

## Start the app (build with prerendering)
```bash
yarn prerender
```

The above command will build the project (quasar build) and prerender its content (start a node server using [prerender-plugin](https://github.com/mubaidr/prerender-plugin)).

## Steps to reproduce

- Run the prerender command above (`yarn prerender`) to build the project
- Prerendering works as expected
- Head to `src/pages/IndexPage.vue`
- Uncomment the style tag at the bottom of the file
- Prerendering doesn't work
