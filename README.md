# Frisbee Golf App

Assignment IV - Full blown app.

Fall 2018 - MAPP

- Anna Kristín Halldórsdóttir - annah14@ru.is
- Birna Vala Eyjólfsdóttir - birna14@ru.is
- Sandra Norðfjörð Sigurðardóttir - sandra14@ru.is
- Stefán Hjartarson - stefanhja16@ru.is

## About the app

This app is for tacking scores in while playing frisbee golf with friends. There are a few apps out there that allow you to do this, but we did not find them to have the functionality we would like. We decided to have the app's content in Icelandic to make it accessible to all ages.

### Courses and playing a game

The app has three navigation tabs at the bottom, 'Vellir' shows you a list of courses in the web API we made. You can click the course and choose to play it. Before you start playing you need to input the names of the players.

When you start the game you get a view of one basket at the time, but can swipe right to get to the next one. You can always swipe left to go to the previous basket aswell. When on the last basket, you can swipe right to see the results, you can also view this while playing the game. After you have filled in all the scores you can save the game from the results screen.

![Screenshot](/screenshots/vellir_listi_laugardalur.png?raw=true 'List of available courses')

![Screenshot](/screenshots/nyrleikur.png?raw=true 'Starting a new game')

![Screenshot](/screenshots/nyrleikur_leikmenn.png?raw=true 'Adding players')

![Screenshot](/screenshots/nyrleikur_eydaleikmanni.png?raw=true 'Removing an added player')

![Screenshot](/screenshots/spilaleik_urslit.png?raw=true 'Played game results')

![Screenshot](/screenshots/spilaleik_urslit2.png?raw=true 'Played game results')

### Viewing saved games

The bottom tab 'Leikir' shows a list of all saved games, so you can view their results.

![Screenshot](/screenshots/leikir_tomurlisti.png?raw=true 'When no games have been saved')

![Screenshot](/screenshots/leikir.png?raw=true 'Saved games')

![Screenshot](/screenshots/leikir_skodaleik.png?raw=true 'A saved game')

### Other

Under the bottom tab 'Annað' other information is stored. There you can read the rules of frisbee golf, about the development of the app, and detailed instructions on using the app.

![Screenshot](/screenshots/annad.png?raw=true 'Overview over the tab Other')

## Course database and API

We looked into getting access to international frisbee golf APIs. We found two, but both had very restrictive requirements of having their logo at all pages that use their API and how the information can be displayed. Their API didn't either have all the courses in Iceland so there wasn't a huge benifit in using it. Therefore we decided to write our own API which we have put a few courses into.

The API was written in Node.js and deployed on heroku. It has one availible GET request

**Link to API**

```
https://frisbi-service.herokuapp.com/
```

**Get all courses request**

- **Method:** GET
- **URL:** /api/courses/

## Next steps

Next steps in development in this app would be:

- Allow login preferably with facebook login.
- Add all courses in Iceland to the course database.
  - amend the GET request so that it can request courses by area.
- Add a map of the courses.
- Allow to choose facebook friends to play with.
- Save games to a server.
- After playing a game with other facebook friends and saving it, all other players that have an account can se the game after it has been saved aswell.
- Make English availible for the app aswell.
