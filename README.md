[DEMO LINK](https://test-task-dt.ilya-maker.vercel.app/)
![Page Posts](http://i.piccy.info/i9/33b374dc16858b91be3fcd5274b9df65/1592124388/126968/1383417/Annotatsyia_2020_06_14_114528.jpg)
## How to run this project
1. Clone this repository.
2. Open the project folder "testTaskDT" in your redactor.
3. Run the command in your terminal `npm install` or `yarn install`
4. Run the command in your terminal `npm run dev` or `yarn dev`
5. Open in your Browser http://localhost:3000
## In this project, it was implemented:
1. Adding comments to the post.
2. Removing a post from the list, and from the post page.
3. Change post data from the list, and from the post page.
4. Adding a new post.
5. View the last 10 posts.
6. View all posts.
## Used technologies 
1. TypeScript
2. React
3. Redux
4. Next.js (SSR)
5. Styled Components
6. Axios
## Task description
__Functional requirements__ 
- The blog should have Latest Posts page (`/` route)
- The blog should have Post page (`/posts/:postId` route)
- The blog should have Create Post page (`/posts/new` route)
- User should be able to create a new post

**Tech requirements**

- Code should be written with TypeScript
- [ESLint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb) setup for code linting
- We want to support SSR in our application. As the most simple solution, use [Next.js](https://nextjs.org/) because it supports SSR out of the box
- User interface should be built with [styled-components](https://www.styled-components.com/)
- Make sure to use React hooks everywhere instead of class-based components
- Redux as data layer with any middlewares set you to prefer
- The project should have clear README with steps to run it
- Network request handled with [axios](https://github.com/axios/axios)
- Use functional programming if you are know-how. [Ramda.js](http://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is plus to your score
- Deploy the app to any free hosting for review. This item is optional, but nice to have :)

__API__

To persist data and work with real API, we're going to use simple Node.js API created in a few minutes. API hosted in the cloud and you can query it from anywhere. API endpoints documentation: [https://documenter.getpostman.com/view/1917440/RzteTChV](https://documenter.getpostman.com/view/1917440/RzteTChV)

__Design__

The design is up to you. Simple, minimalistic and clean would be nice. As a general example check [Ghost standard UI](https://blog.ghost.org/).
