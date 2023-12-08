# Orange Group Tech Bootcamp: Software Engineer (1st Level Test)

## Introduction
Welcome to my submission for the Orange Group Tech Bootcamp frontend test! This simple web application allows users to view, edit, and get details about various products.

## Features

- **Product Listing Page:** Displays a list of products with image, name, star and price.
- **Product Detail Page:** Clicking on view details button navigates to a detail page with more information.
- **Editing:** Users can edit a product's details.

# Project Setup
To get started, clone the repository and navigate to the project directory.
```bash
git clone https://github.com/YourmixJNR/OrangeGroup-SE-Test1.git
```

```bash
cd OrangeGroup-SE-Test1
```
Install the project dependencies using:
```bash
npm install
```

## Running the Project
Since React runs on port 3000 and the JSON Server on port 5000, I've configured the server in the package.json. To start the server, simply run:
```bash
npm run server
```
Now, in a separate terminal, start the React app:
```bash
npm start
```
Visit http://localhost:3000 to access the application.

## Project Structure
- **`src/components`:** Contains reusable components for the application.
- **`src/context`:** Manages the global state using the Context API.

## API Integration
The app fetches product data from a mock server using JSON Server on port 5000.

## Styling
Styling is implemented using CSS for a clean and responsive design.

## Navigation
Basic navigation is implemented between the product list and detail pages.

## Closing
Thank you for reviewing my project! Feel free to provide any feedback or suggestions.