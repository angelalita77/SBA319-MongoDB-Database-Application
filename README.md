

# SBA 319: MongoDB Database Application

## Introduction
This assessment measures your understanding of MongoDB and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.

## Objectives
Create a server application with Node, Express, and MongoDB.
Create a CRUD API using Express and MongoDB.
Create MongoDB indexes.
Use MongoDB indexing to make efficient queries.
Create MongoDB validation rules.
Use MongoDB validation to ensure data consistency.


## Use to test POST for /api/horror/movies
{
    "title": "Gate",
    "director": "Tibor Takács",
    "year": 1987,
    "genre": "Cosmic"
}

## Use to test PUT /api/horror/movies/:id
Replace /:id with /(ObjectID)
{
    "title": "The Gate",
    "director": "Tibor Takács",
    "year": 1987,
    "genre": "Cosmic"
}

## Use this to test POST for /api/horror/books
{
    "title": "The Silence of the Sheep",
    "author": "Thomas Harris",
    "year": 1988,
    "genre": "Thriller",
    "movieAdaptation": true
}

  ## Use this to test POST for /api/horror/books/:id
{
    "title": "The Silence of the Lambs",
    "author": "Thomas Harris",
    "year": 1988,
    "genre": "Thriller",
    "movieAdaptation": true
}


  ## Use this to test POST for /api/horror/comics
{
  "title": "Yuna and Kawa",
  "author": "Kang Seokwoo",
  "year": 2014,
  "genre": "Supernatural",
  "filmAdaptation": false,
  "typeComic": "Webtoon"
}

 ## Use this to test PUT for /api/horror/comics/:id
{
  "title": "Yuna and Kawa",
  "author": "Kang Seokwoo",
  "year": 2014,
  "genre": "Supernatural",
  "filmAdaptation": false,
  "typeComic": "Webtoon"
}


## Project Progress Tracker

**Progress:** 85% complete  
**Checked:** 12 / 14 tasks  
**Progress Bar:** [██████████░░] (85%)

---

| Completed | Requirement | Weight |
|-----------|-------------|--------|
| - [x] | Use at least three different data collections within the database (such as users, posts, or comments). | 5% |
| - [x] | Utilize reasonable data modeling practices. | 10% |
| - [x] | Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. | 10% |
| - [x] | Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. | 10% |
| - [x] | Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. | 10% |
| - [x] | Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. | 10% |
| - [x] | Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. | 5% |
| - [x] | Include sensible MongoDB data validation rules for at least one data collection. | 5% |
| - [x] | Populate your application’s collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection. | 5% |
| - [x] | Ensure reasonable code organization practices. | 5% |
| - [x] | Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 5% |
| - [x] | Commit frequently to the git repository. | 5% |
| - [ ] | Include a README file that contains a description of your application. This README must include a description of your API’s available routes and their corresponding CRUD operations for reference. <br> **(I need to finish the route tables and description of program)** | 10% |
| - [ ] | Level of effort displayed in creativity and user experience. <br> **(I assume I need better error handling or queries for creativity)** | 5% | 

### Bonus Objective
| Completed | Requirement | Weight |
|-----------|-------------|--------|
| [ ] | Use Mongoose to implement your application. <br> *Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s).*| 10% |

 
---

### How to Update Progress
1. Change `- [ ]` to `- [x]` when you finish a task.  
2. Add up the weights of the checked items.  
3. Update the **Progress** line at the top (e.g., `35% complete`).  
4. Update the **Checked** count (e.g., `5 / 14 tasks`).  
5. Update the **Progress Bar**:  
   - Each `░` = 10% progress  
   - Replace with `█` as you advance  

**Example:** If you finish tasks worth 30% → `[███░░░░░░░] (30%)`