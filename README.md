# Choose Your Own Drama Webpage

#### Intro Course Team Project for Epicodus, 06/24/2016

#### By Brett New, Halle Williams, Alan Denison, Shradha Pulla

## Description

This program is a choose-your-own-adventure style web game. The user will enter their name and other information to start. Players will navigate through a series of story points, and the program will decide what the ending will be based on the decisions made by the player. This program is inspired by Korean TV dramas.

## Setup/Installation Requirements

* Clone this repository
* Open index.html in Terminal

## Known Bugs

No known bugs.

## Specifications

The program should handle: | Example Input | Example Output
----- | ----- | -----
The program will take the player's name entered in the beginning and display it in the story | Input: Player1 | Output: Player1
The program will take the player's pet's name entered in the beginning and display it periodically in the story | Input: PetName | Output: PetName
The program will output specific sentences in the story based on the pet selected at the start | Input: Dog | Output: "Media Frenzy" page adds the sentence "your dog barks enthusiastically at your side"
The program will lead to another decision page depending on the radio button selected in the current decision page | Input: radio button 1, checked on "Journey Begins" page | Output: "Media Frenzy" page is shown
The program will lead to different decision pages depending on the special item chosen on the "Journey Begins" page | Input: locket and radio button 2, checked on page "Time Warp" | Output: "Lock(et) Down the Dynasty" page is shown
The program will lead to one result based on the radio button selected on the last decision page of the game | Input: radio button 2, checked on "Media Frenzy" page| Output: "Double Dead-End" page is shown
The side bar will display the player's name, pet's name and a picture of the special item | ----- | -----
The side bar will display a facial expression icon depending on the content of the page | ----- | -----
The program will track which results have been completed and output them in the sidebar if the game is continued (without refreshing the page)| Input: Try Again button clicked by player on "Shark Week" page | Output: You have seen 1 of 9 possible endings
The program will play specific music tracks depending on the current page | Input: player clicks on Enter Your Name input field on the landing page | Output: dangerousLove music clip is played

## Support and Contact Details

Contact Epicodus for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript

## Links

Git Hub Webpage: https://brettnew.github.io/intro-group-project

Git Hub Repository: https://github.com/brettnew/intro-group-project

### License

*This software is licensed under the GPL license.*

Copyright (c) 2016 Brett New, Halle Williams, Alan Denison, Shradha Pulla
