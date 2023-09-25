## Getting Started

### Prerequisits

- Node.js is installed
- Docker is installed
- postgres is installed
- docker compose is installed

To get started, please make sure that docker is running and then run the following commands in order in the root directory of the project:

1. `npm install`
2. `npm run dev`
3. `npm run prisma-migrate`
4. `npm run prisma-seed`

## Running tests

In order to run the test please run the following command:
`npm run test`

## Approach

### General

- For the basic browsing and discovery features, I created 3 pages and a side menu for navigation
- Projects page is a discovery page for users to browse the available projects
- Portfolio page is for users to generate a portfolio given a number of credits
- Home page would have contained some information and links to other pages
- One API endpoint /api/project to return the list of projects
- Generate/calculate portfolio on the frontend

### Why did I choose to run the portfolio logic in the frontend?

There is an argument to be made for both choices which would have depended on what we are trying to optimise/prioritise:

- Frontend: less load on the server
- Backend: webservers are faster especially for bigger data size

### Calculate portfolio algorithm

The algorithm (contained in @/utils/calculatePortfolio.ts) is a recursive algorithm that does the following:

- it starts by checking the active projects weight distribution and normalizes them to 100%
- calculates the credits distribution proportionally to the distribution weight disregarding the projects credits
- if no project credits is falling short of the calculated distribution it returns distribution
- else it calculates the remaining credits left to distribute and deactivates the projects where all credits have been used and keeps track of the weight used from each project and adds the used weight/credits
- it recusively calls itself this time with the remaining credits and the updated list of active projects
- stop condition: all input credits are consumed
- stop condition: when all projects run out of credits to distribute

## Improvements

- Refactoring the calculate portfolio logic, i.e. better attributes/variables namings, passing only necessary data from projects
- Refactoring components for better code readability and resusability
- Refetch data before recalculating portfolio, so the user does not use stale data
- Handle loading and errors on the portfolio components
- Move calculate portfolio logic to the backend, as it scales better for bigger data size. Also it is generally accepted that business logic should live in the backend
- Handle application responsiveness and improve UI/UX
- Handle pagination and/or lazy loading for projects, as the data gets bigger
- Display more relevant information about portfolio generation, e.g. initial distribution vs actual distribution
- Handle rounding up or down distributed credits while respecting the total weight/credits
- Define models and typings for API endpoints (or use tRPC if monorepo)
