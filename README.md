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

## Personal notes
Hi.

I would like to walk you through my thinking process.

I started by thinking functionality first (back-end background maybe). I then proceeded to think on how I could make a customizable library of QuestCard components that would be reusable and so on. The thing is, every QuestCard has the very same structure, changing only it's values. So I decided to try a dictionary approach which is nothing more than an Object with declared functions as a value but will only call the function once a lookup is successfully executed. If too many quest.types exists, this would create many functions that would not be needed by a user in the client-side, which could cause long loading times, I would suggest holding all the information and the dictionary in the server-side (separating the front-side implementations such as text-format, icons and such), as it would then only send to the client the necessary information.

Now... Back to the React reusable components, I did not want to have MANY QuestCardComponents, but I wanted to reuse them.
Here comes component pattern. This approach allowed me to create one single Card.js component that is fully customizable and reusable and will only render what is given to it as props.

The Text element was a bit tricky and I am not fully satisfied with this result. As the text element could have many lines or many spans, the current implementation allows for only simple text, breaklines and one span inside a paragraph. This could either be nested into different TextComponents such as TextComponent.Paragraph, TextComponent.Span and so on, allowing this to then be called as many times as needed. Another room for improvement, could be nesting the CardText and CardTitle into a CardBody component. Allowing for many other blocks to be added. Basically, adding BEM methodology to the React Components Creation would prove to be highly helpful, as it would allow us to build many small blocks of components with style and functionality, rather than only the style.

Of course, BEM is being used in the scss files but I took one step further and brought it to the organization of the file system as well, allowing for a scalable and reusable codebase altogether.

The idea was an Atomic Design approach, by creating MANY small components, we can combine them into one bigger component, than combine this bigger component into an even bigger one until we have a full page.

For the images, the dictionary is currently pointing to the publics folder for contact pictures as the link in the json mocked file was not pointing to an image and I strongly believe having the pictures in the screen helps isualizing better the end product.

### Next steps
As this implementation follows strictly a series of instructions and requirements, this is not production ready. Here is what could be added to a final product:

- Fetching of a live API for real data;
- API calls for marking a quest as complete or discarding it;
- A hover-state message for the info button on the container title;
- Access to the full range of possible quest.types would allow for finishing of dictionary
- Type checking and Error Handling
- Testing

## Conclusion
Executing this test, got me thinking at the amount of hours that can be saved once you have a big library of fully customizable components. The creation of this library might be really slow and feel like "over doing it", but once you have a strong documentation paired with a robust system design that walks side by side with your components design, you can create new screens and add new features in the blink of an eye.

Although some room for improvement still exists, I am quite happy with the result achieved in this test and I will definitely keep this repo for future usage on the CardComponent.

Thanks for letting me do this.