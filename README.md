# Quest Container

This project is a take-home assignment.

The quest container is a feature from CareerOS where users will have customized quests to help them manage their careers.

The quest container receives a list of quest items from the API (currently mocked) and displays a series of cards with customized messages based on the properties of each quest item.

The goal of this project is to showcase my capacity of fetching data, creating a dynamic container,  creating reusable React components, knowledge of smart/dumb pattern, capacity of following BEM naming convention and code readability.

#### Test Requirements

The most important requirements for this test are:

- Follow BEM methodology for SCSS classes
- Create reusable components for different types of quest 
- Follow smart/dumb component pattern

It goes without saying that the final result should match the design file perfectly, the container should be dynamic (only render the data retrieved from the API) and no functionality further than the requirements should be added.

## Get started
In order to run this project locally, you will need Node.js installed on version >= 14.x and the last stable version of npm or yarn. Check relevant docs on how to get this installed for your OS.

- Clone this repo locally
- Run `npm install` or `yarn install`
- Run `npm start` to execute the server locally
- Open your browser on localhost usually at http://localhost:3000

## Next steps
As this implementation follows strictly a series of instructions and requirements, this is not production ready. Here is what could be added to a final product:

- Fetching of a live API for real data;
- API calls for marking a quest as complete or discarding it (according to hover state of each Quest card);
- A hover-state message for the info button on the container title;