# For Science!  And Cavemen!
![](https://i.giphy.com/jHvnDjWx6bx6w.gif)

## Background:
  He had finally found it.  He, Monsieur Jasioix De Seminoiraux, reknowned French paleontologist and collector of fine scarves had finally found the tablets.  They were old and frozen but he could still read the ancient drawings that told the story of Trevoog and Irwikiwaki, ancient neandrathal engineers and creators of humanity's first boat.  Jasioix picked up his phone and called Bobbfriedd Van Kinghardt, his Germanic colleague and fellow scientist.
  
  "Bobbfriedd, you wouldn't believe it!".  The freezing wind of the French Alps had formed waxy icicles in his perfectly manicured mustache. "I got the tablets!".  
  "That's great, friend.", Bobbfriedd responded.  "Send them over! Also, send them Vrafva in Russia!".  
  "But hooooow", Jasioix moaned.  
  "Build an API, obvi.  Bobbfriedd out." Bobbfried had hung up. 
  
  Jasioix's lip curled in frustruation.  He was a scientist in the French Alps, how in the world could he muster an API?
  
  10 minutes later and 80,000 miles away, your phone rings.
  

## Objectives:
1. Create a rails API that serves journal entries for our esteemed team of scientists.
2. The scientists should be able to access all of the journal entries by going to 'http://localhost:3000/entries'.
4. The scientists should also be able add new entries, edit existing entries or delete existing entries by accessing individual routes by id (i.e. posting to 'http://localhost:3000/entries/5').  All changes should persist in your database.
5. Assume the scientists are super proficient with Postman.

Sometimes it helps to break it up into parts.  Here is some advice:

## Part 1:  Create your Rails app.
* Create a new rails app as an API.
* Create a new controller called 'entries' with full CRUD functionality.
* Update config/routes.rb to tie your CRUD actions to rails routes.

## Part 2:  Access all Entries.
By the end of part 1, going to 'http://localhost:3000/entries' should return:

``` 
[
  {
    "id": 1,
    "name": "Trevoog",
    "entry": "Today Irwikiwaki touch bright hot energy.  Can not explain so we invent Thor.  Thor invent 'fire'."
  },
  {
    "id": 2,
    "name": "Irwikiwaki",
    "entry": "Today I observed it takes 4 rocks and 2 sticks to sink duck.  How do Irwikiwaki and Trevoog make large duck to ride?"
  },
  {
    "id": 3,
    "name": "Trevoog",
    "entry": "9 ducks will not float 1 Trevoog.  On positive side, Trevoog invented towel that dry Trevoog nicely."
  },
  {
    "id": 4,
    "name": "Irwikiwaki",
    "entry": "Today I chase ducks with Thor flame. Ducks hate Thor flame.  Slow ducks become fast ducks."
  },
  {
    "id": 5,
    "name": "Irwikiwaki",
    "entry": "45-duck-boat carries 1 Irwikiwaki and a Trevoog.  0-60 in 4 hours!  Success."
  },
  {
    "id": 6,
    "name": "Trevoog",
    "entry": "We chase 45-duck-boat with 3-log-Thor-flame.  Duck boat much fast now."
  },
  {
    "id": 7,
    "name": "Trevoog",
    "entry": "Duck boat complete.  Next mission - invent purple."
  }
]
```

* Create a model that would allow us to make this.
* Migrate your model.
* Create a seed file.  We haven't given you one, but how do you build this?  Can you modify the JSON array above to suit your needs?  Is [this resource](http://www.xyzpub.com/en/ruby-on-rails/3.2/seed_rb.html)  helpful at all for figuring it out?
* Seed your data and update the entries_controller to retrieve it.
* Run your server and go to 'http://localhost:3000/entries' to make sure you get your expected results!

## Part 3: Add CREATE, UPDATE and DELETE to your controller.
* Edit your entries_controller so that you can run put, post, and delete entries through an id parameter in Postman.  For example, you should be able to create an 8th entry by setting Postman to 'POST' and going to 'http://localhost:3000/entries/8'.  You can also edit or delete it through the same route and the appropriate Postman settings.

## Part 4: Comment it Up!
* Comment your controller.  You should __always__ be doing this, but for tonights assignment be sure to really really do it.  Go to your entries_controller and break down what each method is doing.  Be specific about the mechanics and why each method is the way it is.  Comment on the roles that the classes and ruby methods play towards the overall objectives of each CRUD method.

## Part 5: Project Proposals!  

### Format:
As we've done for the last few projects, we need a proposal!  Write your proposals as an issue attached to the [project prompt](https://git.generalassemb.ly/wdi-nyc-60/project-4).  In that issue include the following information:

* _Concept_:  Clearly state the idea.  What's the idea?  What problem is it solving?  Is it solving a problem?
* _Technology_:  What tech are you using for the project?  Back-end, front-end, interesting libraries?
* _User Stories_: Describe your idea with user stories.
* _Wireframes_: You already know.
* _Time Table_ (NEW!!!): Include an ideal time table for yourself __with dates__.  Include time for planning.  By what dates do you want to get each part done?  This should be regimented and atainable, but we won't be holding you to it.
* _Key Challenges (and Proof of Concept)_:  What are the parts that you predict will be the most difficult about your final project?  Anything new and unproven that you plan on doing?  If so, do a proof of concept test!  What will it be?

