# The Food And Wine Taste Master Quiz
Food and Wine Taste Master class quiz is a Javascript web application aimed at all food enthusiasts who wish to test their knowledge in the culinary world as well participating in the Taste Master World. All questions are based on the food and world cuisines as well as wine. The winners are to get a spot in the upcoming Taste Master World.

![Header Image](assets/images/Screenshot_120.png)
# UX
## Site Owner Goals
- Ensure  users know what to do when they arrive on the site
- Ensure a visually appealing site
- An easy to navigate site
- Ensure users can track their perfomace throughout
## New User Goals
- Easy Navigation
- Visual Appealing, well structured site
- An engaging application
- Easily track perfomance throughout to the end
## Returning User Goals
- User can enter their usernames
- User can track the time remaining before completing the quiz
- User can be able to share their results with friends and loved ones on social media
## User Stories
### New user
- As a First Time user, I want to easily understand the purpose of the site
- As a First Time user, I want to easily navigate the site
- As a First Time user, I want to easily track my score
- As a First Time user, I want to easily quit the game once done
- As a First Time user, I want to easily replay the game once done
### Returning user
- As a returning user, I want to be challenged with new questions
- As a returning user, I should be able to play the quiz on any device
# Design
## Colors
I created the quiz color scheme using [ColorHunt](https://colorhunt.co/palette/22577a38a3a557cc9980ed99). I used five colors eventually though at the beginning I had used only four. This was before I had checked the color contrast with [WebAim](https://webaim.org/resources/contrastchecker/), when I realised two of my colors were failing. In order not  to change everything completely, I added one more as it only covers a smaller part of the project. The final colors used follows:

![color palette](assets/images/Screenshot_111.png)
### Color scheme from left to right
- #22577A (navy): I used this color as the background and main color of the quiz. It covers every section of the quiz.
- #FFFDD0(cream):This color was used as a font color for all the quiz sections except for the buttons
- #57cc99(green): I used this green color as background color of buttons as I had chosen a darker color as the sole background, needed something to brighten and contrast up the quiz area. Also this color is used to create that shadow area of the quiz boxes of all sections. This green color appears as well when a the user chooses a correct answer, to indicate that their answer is correct. Lastly it is the background color of choice A-D, to keep everything consistent.

- #102637: I used this color as font color for buttons and choices A-D, but before that the font color was FFFDD0(cream), however it failed at color contrast checker with [WebAim](https://webaim.org/resources/contrastchecker/). Eventually had to use it as it contrasted well with background color green, and all other colors of the project.

- #DA1212(red): I used this color to tell the user if they choose a wrong answer. If they pick a wrong answer they will know before moving to the next question.

## Typography
There are two fonts used in this project. Firstly on the landing page  I wanted something eye catching as well as covering quite a space since this project does not have many categories, so I went on to use [Monoton](https://fonts.google.com/specimen/Monoton) for my main heading. For the questions, answers and every other information, I chose [Noto Serif](https://fonts.google.com/noto/specimen/Noto+Serif) as it is more readable for the users.

## Icons
I used the icons from [Font Awesome](https://fontawesome.com/) that are on the start button to further tell the users the type of the quiz they are about to play.
## Wireframes
I used [Balsamiq](https://balsamiq.com/) to give my site a design I wanted. I first drew a sketch using pen and paper before designing moving on to balsamiq so that I could see hpw it appears on web. I knew that I needed my site to be on one html page divided into sections easy to work with and how they should link together. The wireframes follows:
* Landing Page

![landing page](assets/images/Screenshot_127.png)
* Quiz screen

![quiz screen](assets/images/Screenshot_130.png)

* Results screen

![results screen](assets/images/Screenshot_133.png)
# Features
* The landing page

This is the first page users see when they visit the site. There is a clear start button which they will click and takes them to the next section of the quiz. The landing page contents are positioned in the middle of the page and responsive to all devices.
![Landing page](assets/images/Screenshot_121.png)

* Quiz Screen

This is the main game area where all quiz questions and answers are displayed. It consists of the quiz header, questions and answers, as well as quiz progress( question and score). So the user is presented with questions with choices to choose from, the progress is displayed below with question number to the left, and the score to the right.

![quiz screen](assets/images/Screenshot_122.png)

The questions are populated from a local array, easily readable with good color contrast. The answers are presented as A,B,C,D. A user have to pick only one choice from these four choices. If the correct answer is picked, a green color pops in.

![correct ](assets/images/Screenshot_123.png)

If wrong answer is picked, a red color flashes on the picked choice immediately green color flashes on the correct one before a new question is presented.
![wrong](assets/images/Screenshot_124.png)



The question increment each time user is presented with a new question, and user cannot be given a new question unless they first choose an answer for the already presented one. The score increments each time the user choose a correct answer.

# Results page
This is the last section of the quiz that is shown to the user once they complete the quiz. It shows four main things, 
* The score
* The feedback information
* The Replay button
* The Quit button

The score shows the final score the user get which has been incrementing along per each correct answer they chose. The feedback text shows the user if they had qualified to the TasteMaster World based on their final score. If they score 6 out of 10, they earn a place at the TasteMaster World, however anthing below that it means they would not qualify.

The Replay button allows the user to interact with site, allowing them to retake the quiz. Upon clicking this button, this will take them to the question screen page where they will be presented with the first question.

The Quit button is another way users will interact with this site. This page allows them to exit the quiz. When they click it, it will take them to the landing page.

![results page](assets/images/Screenshot_125.png)
## Future Features
* In the future I would l like to have category of questions so that users can choose what level they would want to play
* I would like a feature to allow users to share their results with their loved ones on social media

# Technologies
## Languages
HTML
 * Used a structure language to give this site a structure

 CSS
 * Used as a style language 

 Javascript
 * Functionality and responsive of the site

 ## Frameworks and Libraries
 Gitpod
* Used as a platform to develop the site

Google fonts
* Used as a font library

 Font awesome
 * Add icons to the project

 # Testing
 ## Layout Site development
 One of the site owner's and user goals is to have a visually appealing site with minimal clutter of information. At first the landing page had lots of unnecessary text yet the user just needs a clear instruction that goes straight to its meaning.

 Realised its a pain to have so many buttons you have to click inorder to navigate around, though initially on my paper I had an extra next button I needed to put,I thought to have one button at the landing page then two on the last page was user friendly.

 After completing the site layout and styling, I needed to test out the color contrast and I used [WebAmi](https://webaim.org/resources/contrastchecker/). Two of my colors green and cream were failing. It was not in any intention to change everything completely so had to add an extra color for a good contrast. 

 ### Javascript
 The first problem I encountered Javascript that took me hours to get through was displaying answers or choice corresponding to each question. All that was displaying were the same type of answers for all questions. This however was solved using dataset attribute, that I attributed to all answers/choice text in html then created a function that displays in html, a concept I learned from [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw).

 When the above was solved, I realized questions were displaying in multiples of 3, for example from question 1, the next question will be question 3 and so forth. There is a function that checks if the answer is correct. It has an if else statement, in the else statement there is for loop that was calling a get new question function. Meaning this function was being called twice inside the else statement. It took me hours to realize this, something that did not want any extra lines of code.

 ## Functionality and compatibilty testing
 Chrome developer were used to test for functionality and compatibility. That includes things site responsiveness as well as virtual devices as well as hardware devices like TAB E, Samsung A51.
 ## Perfomance
 I ran lighthouse in dev tools to check the perfomance of the site, the results follows:
 ![lighthouse](assets/images/Screenshot_136.png)

 # Credits
## Content
The following websites were used for the quiz questions:
* https://www.mylondon.news/whats-on/food-drink-news/20-food-quiz-questions-answers-18151583
* https://www.radiotimes.com/quizzes/pub-quiz-food-and-drink/
* https://www.bbcgoodfood.com/howto/guide/food-quiz
* http://www.freepubquiz.co.uk/wine-quiz.html
* https://pubquizquestionshq.com/quiz/food-and-drink-quiz-round-21

## Code
All the code production was done using [Gitpod](https://gitpod.io/) and passed in to [HTML validation Service](https://validator.w3.org/) and [CSS Validation Service](https://jigsaw.w3.org/css-validator/) as well as [JSHint](https://jshint.com/) to check for errors. The box shadow code is from [Coding Nepal](https://www.codingnepalweb.com/quiz-app-with-timer-javascript/) that I later adjusted to suit my design of preference. The actual quiz help came from [Web Dev Simplified](https://courses.webdevsimplified.com/) as well as [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw). Icons are from [Font awesome](ontawesome.com). Thanks to [Geek for Geeks](https://www.geeksforgeeks.org/), [W3C Schools](https://www.w3schools.com/) and [Code greeper](codegrepper) for general explanation on CSS and Javascript.



 
  # Deployment
Food and wine quiz was deployed as follows:
* Open the repository on GitHub
* Go to "Settings" (the tab on the right)
* On the left hand side select "Pages" 
* Select the "main" branch as the source. Then it shows you a green confirmation "Your site is published at......" with the URL.







