runs with node version 8.0

In your terminal run

`yarn install`

To develop the site

Run this command as a prebuild step, it converts sass to css.
`yarn gulp`

Then run
`yarn dev`

To build the production version of the site run 

`yarn build`

To deploy the site

`node publish`

if node-sass throws errors. Change to node version 8, delete your node_modules and run `yarn install`
