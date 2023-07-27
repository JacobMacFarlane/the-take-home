# News Reader App
This project is a news reader application that retrieves articles from the NewsAPI and displays them to the user.

# Installation
Clone the repo
Copy code
git clone 
Install dependencies - npm install
To start the app, run: npm start

## The app will load with a list of the top headlines. You can:

- Click on an article to see a detailed view with the full content
- Search articles by keyword
- Sort articles by relevance, popularity, or date

## The app is built with:

- React for the UI
- React Router for routing
- NewsAPI for the article data
- Custom CSS for styling


## Wins

- Having a second state to store results before search
- Learning I can use ? to make things optional(Similar to TypeScript)

## Challenges

- Having limited Calls with API resulted in me using mock data
- Figuring out what to use for URL since API did not return unique id

## Some key aspects of the implementation:

- Articles are fetched on load and stored in React state
- A route passes the article title to show a detailed view
- Search filters the articles state based on user input
- Sorting sorts the articles before display
- Error handling displays messages if API call or search fails
- Mobile responsiveness with CSS

## Overall this implementation covers:

- React fundamentals including state, effects, routing
- Consuming a 3rd party API
- Search, filter, sort functionality
- Detailed article views
- Error handling
-Basic responsive design

# Next Steps

## Some possible improvements with more time:

- Pagination for large results
- Save favorites
- Share articles
- Improved search (date range, categories, sources)
- Login to customize results
- transitions/animations
- More robust error handling