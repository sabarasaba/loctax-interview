# loc.tax Interview Project

First of all I just want to mention that I really enjoyed the little project, its always fels nice and fresh to start a new project with a solid set of technologies and get started solving a problem. While I did spend more than 4hs working on it, I just couldn't bare myself giving a half baked solution that its not up to my standards. I didnt do everything everything I wanted to do, but I think most of those things (I'll list them below) can be done with just a lil more time.

Was also good that I was given the liberty of using tailwind for the styles rather than styled-components, which allowed me to iterate much faster; and to also have some liberty design wise. While what I did is not amazing, I feel is more concise and intuitive than the one that was given in the assignment screenshot.

ALSO! Lots of the dependencies from the project were out of date (react-scripts) and some others were deprecated (apollo boost and react-apollo are now @apollo/client) so I took the liberty updating them!

## Running the project
* Clone the repo
* Install dependencies with `yarn install` or `npm install`
* Start the dev server with `yarn dev` or `npm run dev`

## What I would've done with more time

* I think we can prevent the usage of the api call for getting pokemon details if we could add the pokemon moves into the PokemonsSchema (somehow it always returns null). Granted we have to check how this data is acquired in the backend and make sure it wont affect performance
* We couldve also used apollos local state in order to keep track of selected squad and their moves and optimistically update the UI with the `mutate` function. I've never used Apollo (this was my first time) so didnt feel super comfortable diving into that since it would've taken me so much more time to get it done. So I recurred to keeping that state separated with a little ContextProvider instead.
* You cant add an already added pokemon or more than 6 (configurable by env variable) but there isnt a clear visual way to the user to know why they cant add it.
* You cant edit or remove an already added pokemon from your squad
* Not super duper mobile friendly
* I didnt wrote any tests at all
* There are a few `any` here and there and a few `@ts-ignore` that helped me mostly get around some of the weirdness that react-select was giving me. Some others I was just too lazy to keep on reading type definitions from third-party libs or writting proper type definitions for everything.
* The ListItems in the PokemonSelector are not accessible
* For the Select component I used react-select to avoid having to create it with react-aria, very much doable and not complex at all but a bit out of scope. Right now the react-select its not fully inline with the styles the other components follow.
* React Select throws a few deprecation warnings since most of those will stop being supported after react 18, the maintainers of react select are waiting a bit longer to fix them. So I disabled react StrictMode for now :poop: Also had a few issues with their internal type definitions so theres a few ts-ignores here and there.
* Not entirely happy with how the selected squad is being shown right now, for sake of simplicity i just reused the PokeCard component and appended the selected abilities (doesnt look amazing and there are no placeholders for empty slots)
* There is barely any error or loading handling when communicating with apis.
* Didnt do any animations at all in order to save time.
