# The Simpsons Bash

![Simpsons Intro](https://media.giphy.com/media/xT5LMSX0VGG2yHh8ek/giphy.gif)

## Learning Objectives

Today we want you to be comfortable traversing your way through a file system using the terminal.
![Terminal image](https://camo.githubusercontent.com/a5b3ba816df436e40d059312f25d388836d8890c/687474703a2f2f706978616261792e636f6d2f7374617469632f75706c6f6164732f70686f746f2f323031332f30372f31332f31332f34312f626173682d3136313338325f3634302e706e67)
## Setup
Work in the `hw-w01-d01` directory. Create a new directory called `simpsons` where we will do all of the following work.


## Completion
Finish all of the parts! In the future we may set reach goals and add bonuses onto the homework, however we decided to go with an easier assignment to help get you acclimated to the course. The main purpose of this assignment is to get you feeling comfortable typing and working inside the terminal.

## Part 1 - Simpsons Activity
The more practice you have working in the terminal manipulating files and directories the better!

#### Creating the scene
The Simpsons are your average American family living in Springfield. Let's create the family's hometown, create a directory called `springfield` and `cd` into it. Once you've navigated into the directory let's create the family members, create the following files in your `springfield` folder:
<br>
-`Homer.txt`<br>
-`Marge.txt`<br>
-`Bart.txt`<br>
-`Lisa.txt`<br>
-`Maggie.txt`<br>

#### Remaking the Intro
1. When the show's intro starts the camera pans through the clouds and over the entire town. The view then focuses through the window of the elementary school where we find Bart in detention writing out whatever horrible deed he accomplished that day. Create a directory called `school` and move `Bart.txt` inside of it.<br><br>
2. Next the camera pans to the nuclear power plant where we find Homer mishandling what appears to be a radioactive core sample. Create a directory `power-plant` and move `Homer.txt` into it.<br><br>
3. Homer forgot his employee ID, so he needs to get a temporary pass. Let's use the ECHO command to initialize some text in `Homer.txt` like such - ` echo 'Work Pass: Homer J. Simpson' >> Homer.txt `<br><br>
4. Then we find Marge and Maggie together in the super market. Create a `market` directory and move Marge and Maggie inside it.<br><br>
5. The camera then pans to the band room in the school where we find Lisa crushing a sax solo. Traverse to the `school` directory, create a `band-room` directory, and move `Lisa.txt` into the `band-room` directory.<br><br>
6. We then find the family making their way home through the streets of springfield; Homer in his pink car, Marge and Maggie in the red car, and Bart on his skateboard. Traverse back to the `springfield` directory and create the directories for the each mode of transportation, and then place each respective party in that directory.<br><br>
7. The family finally makes their way back home and the hilarious couch gag ensues. Create a `home` directory inside of `springfield` and then create a `couch` directory within `home`. Then Move ALL of the family members to `couch`. BONUS - can you move the family members without going into any of the springfield sub-directories? (HINT - use relative paths! If in `springfield` directory, what does ` ls ` return? How about `ls power-plant `?)

#### Submitting your work
When the exercise has been completed you may have felt it was quite useless because now you have a bunch of empty directories and some arbitrary `.txt` files that don't even contain any text! This is all about getting reps and feeling comfortable in the environment. Keep practicing - this is now your life!

To submit, go to your desktop and find the folders with the files you just made.  Click the "columns" for display options (red arrow pointing to it below). Click through your folders so that the "home" directory is highlighted and you can see the text files inside.  Take a screenshot by using ` Command-Shift-4 ` to bring up a tool which will save a snapshot of any selection. The final result should look like this (without the red annotations):

![Submission Example Image](https://git.generalassemb.ly/raw/wdi-nyc-60/hw-w01-d01/master/submission_example.png?token=AAAAFP59qMn8wUITtImDe-y-kizGUsGUks5X6W44wA%3D%3D)

That screenshot will automatically save to your desktop.  Move it to your homework folder.  You should have been using ` git add . `, ` git commit -m "MESSAGE" `, and ` git push origin master ` after each step. Do it one more time with the screen shot in the homework folder! In general, there will be a slightly more involved process for submitting homework (which you can look up in the wiki), but this is sufficient for tonight.

#### Schoology
We will be using Schoology to manage homework submissions. First step is to make sure your homework is git added, committed, and pushed to your git.generalassemb.ly repo. Next, open Schoology in a browser, navigation to Evening Exercises > Unit 1 > hw-w01-d01. Click on submit assignment on the right hand side and then click on the 'Create' tab. From here, follow the example below for your submission.

![Submission Form Image](https://git.generalassemb.ly/raw/wdi-nyc-60/hw-w01-d01/master/submission_form.png?token=AAAAEw38aeCFXLTereMskJiT1MD48ejPks5X6XvpwA%3D%3D)

## Part 2
Watch this [TED Talk about Grit](http://www.ted.com/talks/angela_lee_duckworth_the_key_to_success_grit?language=en). We won't be assigning anything to ensure that you watch the video or not, but it's really a great talk and is relevant to this course as the 12-week/9-5 schedule of this course can be a bit overwhelming.
