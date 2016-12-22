Part 1
Seeding your database

1. Access the mongo REPL using the mongo command
* mongo

2. Create a monsters database the use monsters command
* use monsters 

3. Create a vampires collection by using the db.createCollection("vampires")
* db.createCollection("vampires")

4. Exit the mongo REPL with control + c
* ^C

5. Import the json to this collection using the commands 
* mongoimport --db monsters --collection vampires --drop --file populateVampires.json --jsonArray 


Part 2
Select by comparison

Select all the vampires that:
1. have greater than 500 victims
* db.vampires.find({"victims": {$gt: 500}})

2. have fewer than or equal to 150 victims
* db.vampires.find({'victims': {$lte: 150}})

3. have a victim count is not equal to 210234
* db.vampires.find({'victims': {$ne: 210234}})

4. have greater than 150 AND fewer than 500 victims
* db.vampires.find({'victims': {$gt: 150, $lt: 500}})


Part 3
Select by exists or does not exist

Select all the vampires that:
1. have a title property
* db.vampires.find({'title': {$exists: true}})

2. do not have a victims property
* db.vampires.find({'victims': {$exists: false}})

3. have a title AND no victims
* db.vampires.find({'title': {$exists: true}, 'victims': {$exists: false}})

4. have victims AND the victims they have are greater than 1000
* db.vampires.find({'victims': {$gt: 1000}})


Part 4
Select objects that match one of several values

Select all the vampires that:
1. love either frilly shirtsleeves or frilly collars
* db.vampires.find( {$or: [{'loves': {$in: ['frilly shirtsleeves', 'frilly collars']}}]})

2. love brooding
* db.vampires.find({loves: 'brooding'})

3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
* db.vampires.find( {$or: [{loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}}]})

4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
* db.vampires.find({'loves': {$nin: ['top hats', 'virgin blood']}, 'loves': 'fancy cloaks'})


Part 5
Select with OR

Select all the vampires that:
1. are from New York, New York, US or New Orleans, Louisiana, US
* db.vampires.find({$or: [{location: {$in: ['New York, New York, US', 'New Orleans, Louisiana, US']}}]})

2. love brooding or being tragic
* db.vampires.find({$or: [{loves: {$in: ['brooding', 'being tragic']}}]})

3. have more than 1000 victims or love marshmallows
* db.vampires.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]})

4. have red hair or green eyes
* db.vampires.find({$or: [{'hair_color': 'red'}, {'eye_color': 'green'}]})


Part 6
Negative Selection

Select all vampires that:
1. love ribbons but do not have blonde hair
* db.vampires.find({"loves":"ribbons", 'hair_color': {$nin: ['blonde']}})
*** THERE ARE NO UNBLONDE VAMPIRES THAT LIKE RIBBONS

2. are not from Rome
* db.vampires.find({'locations': {$nin: ['Rome']}})

3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
* db.vampires.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}})

4. have not killed more than 200 people
* db.vampires.find({victims: {$lte: 200}})

