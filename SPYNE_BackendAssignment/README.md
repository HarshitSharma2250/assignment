
# Project Title

SPYNE Backend Project


## Acknowledgements

This project processes CSV files containing product data with image URLs. It compresses images and tracks the processing status in MongoDB. Users can:

   - Upload a CSV file with product details and images.

  - Check the status of the image processing request.

   -  Download processed data in CSV format.
## API Reference

#### upload csv file

```http
  Post /user/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `scv file ` | `csv` | **Required**. serialNumber,productName,inputImages |

#### Get status

```http
  GET /user/status/requestId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `requestId`      | `string` | **Required**. Id of item to fetch for status|

#### download csv

```http
  GET /user/download/requestId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `requestId`      | `string` | **Required**. Id of item to fetch |


##  Setup Instructions

### Clone Repository
https://github.com/HarshitSharma2250/SPYNE_BackendAssignment.git

### Install Dependencies
npm install

###Start Server
npm Start




## 📌 Appendix

### 🔹 Dependencies Used
This project uses the following npm packages:
- `express` - Web framework for Node.js
- `mongoose` - MongoDB ODM for data storage
- `multer` - Middleware for handling file uploads
- `csv-parser` - Parses CSV files in Node.js
- `sharp` - Image compression and processing
- `axios` - Fetches images from external URLs
- `uuid` - Generates unique request IDs

### 🔹 API Error Handling
Common error responses and troubleshooting:
- **400 Bad Request**: Invalid request parameters or missing fields.
- **404 Not Found**: Resource not found (e.g., requestId not in database).
- **500 Internal Server Error**: Server-side issues; check logs for debugging.





## Demo

https://spyne-backendassignment.onrender.com

for testing-

```javascript
server.get('/home',async(req,res)=>{
    res.send("server is setup fine")
});
```








## Documentation

This section provides detailed information about how to use and extend the CSV Image Processing System.

### 🔹 API Documentation
The API documentation describes all available endpoints, request parameters, and response formats. You can access it in:
- The **[API Documentation](#-api-documentation)** section above.
- The **Postman Collection**: [Postman API Docs](https://www.postman.com/ppp111-9830/workspace/spyne/collection/27708251-254d96cb-6e96-4270-a4a2-f3aa42aa3688?action=share&creator=27708251)

### 🔹 System Architecture
A detailed overview of the system's architecture, including:
- How data flows from CSV upload to processing and storage.
- The role of asynchronous workers in handling image processing.
- The MongoDB schema and indexing for optimized queries.

### 🔹 Worker Functions
- **Image Processing Worker**: Handles image fetching, compression, and database updates.
- **CSV Data Handler**: Ensures proper parsing, validation, and structured storage.

### 🔹 Deployment Guide
For detailed deployment steps, refer to the **[Setup Instructions](#-setup-instructions)** section.

For more details, check the **GitHub Repository**: [GitHub Link](https://github.com/HarshitSharma2250/SPYNE_BackendAssignment)



## Features

- Upload CSV with product details and image URLs.
- Automatic image compression using sharp.
- Stores processing requests and tracks status in MongoDB.
- Fetch images asynchronously and process them in the background.
- API to check processing status in real-time.
- Download processed data as a CSV file.
- Supports large CSV files with efficient processing.
Features

## 🚀 About Me

- I'm a MERN Stack Developer with expertise in Node.js, Express, React, Redux, MongoDB, and Mongoose. - Passionate about building scalable web applications and APIs.

🔹 Tech Stack:

- Frontend: React, Redux, Redux Toolkit, HTML, CSS, JavaScript, Tailwind CSS

- Backend: Node.js, Express, MongoDB, Mongoose

Other Tools: Git, Postman

🔹 Interests: Web3, API development, and backend optimization.

## Installation

Install this project with npm

```bash
  npm install 
  npm run dev
```


## Tech Stack

**Client:** React, Redux, TailwindCSS,redux toolkit, html,css , javascript, chakra, 

**Server:** Node, Express , mongodb, mongoose, cloudinary etc

