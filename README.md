# Food Trucks

### Tested environment 

SO: Windows 10 Pro

NodeJS: v10.14.2

### Run instructions

1. Download the build zip file. https://github.com/adalvarez/foodtrucks/releases/tag/0.0.1
2. Download dependencies
    > npm install
3. Run the build
    > npm start
4. Go to the page http://localhost:8081/

### Views

Table with all the information

![ss1](https://i.imgur.com/t7lbzns.jpg)

View to request the nearest food trucks.

![ss2](https://i.imgur.com/vx58g34.jpg)

After the request was sent, you'll see the following result

![ss3](https://i.imgur.com/QrEuoH0.jpg)

Markers with info

![ss4](https://i.imgur.com/HDmjoN7.jpg)


### Documentation

#### Backend 

A web API was developed under the following strategy. Using NodeJS and Express, a web API was built with some standards.
* Versioning of the API. For example:
    > http://api/api/v1/endpoint
    
    > http://api/api/v2/endpoint
    
    > http://api/api/vn/endpoint
    
* CORS and Compression were enable
* Routers: The API uses routers to handle routes of endpoints. Current structure:
    > (R) API
    
    > --- (R) V1
    
    > ------- (R) foodtrucks
    
    > --------------------- / Get all food trucks
    
    > --------------------- /near Get the n nearest food trucks from lat/lng
    
* Validations: The API uses Joi to check all parameters, body and data from the endpoint.
* Logging: The API records all request over a file under res/log.log
* MVC is used to handle all backend. Using the source CSV file as database. In case we use a real database is just required change the model method returning exactly the same data format.
* Distance algorithm: I use the following estimated distance algorithm. In case this algorithm is not enough accurate Ref: https://www.movable-type.co.uk/scripts/latlong.html

###### What's next?

In case that I had more time I would like to implement the followings:
* Test files with Jest and SuperTest to the the entire web API.
* With more requirements could be useful authentication with JSONWebtokens.
* Implementing a database.
* Bring the service to a cloud environment.
* Configure a little web app to see a dashboard of OpenAPI to see full documentation of the Web API endpoints, methods, requirements, input format, output format.
* Documentation of code with ESDocs (implemented but not full documented) 
    > npm run docs
    
    > go to docs/
    
* Using sonarqube to check code.
* Better mechanism to build and deploy. Currently is manually, that means build the web react, copy the build, go to dist/view/ and paste there.

#### Frontend

* View with all the data from the CSV.
* Some fields were change to get a better UX, using icons.
* Pagination of data.
* Filtering of data.
* Ordering of data.
* Using a map to show (with markers) information about the food truck.

###### What's next?

In case that I had more time I would like to implement the followings:
* Good file structure of components but could be better.
* Refactor and reuse of table of data, parameterized to show just some fields.
* Better inner documentation.
* The marker could have more information, more than just the name.
* Unit and integration testing.
* System tests.
* Usage of Redux.
