
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

This is an API that takes a current datetime in either UTC or UNIX (ie. seconds from January 1, 1970), and returns a JSON object that has that time in both UNIX and UTC. 

Edge cases:
* If no date is provided, the API returns the current date/time in UNIX and UTC. 
* If the date cannot be parsed by the _new Date()_ object, it returns a JSON object with an error message. 

Demo: 
* https://boilerplate-project-timestamp.cellehcim.repl.co/ (main page)
* https://boilerplate-project-timestamp.cellehcim.repl.co/api/2015-12-25 (UTC date format)
* https://boilerplate-project-timestamp.cellehcim.repl.co/api/1451001600000 (UNIX date format)
* https://boilerplate-project-timestamp.cellehcim.repl.co/api/ (current date/time) 
