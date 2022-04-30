# The App to Set Your Morning Tune
__Project Created: December 2021__  
Status: Discontinued, Unpublished

## Tools
+ Flutter as frontend
+ Dart
+ Azure
+ Node.js as backend
+ JavaScript

<img src="assets/images/project/morningapp/main.png" width="300"/>

[The demo of the application on Youtube in English](https://www.youtube.com/watch?v=mh1NMfWc18s)

## Project Description
The project is created as the homework of the Human Computer Interaction course. Morning app is one of the topic we can choose and what we choosed.

The project is done in a 3-person group. I was the leader and the developer/designer of frontend application.

The idea of the app is to give you all the info you need for the morning.

In order to follow the guideline of the homework. We did

> Interview -> Storyboard -> Prototype -> Implementation -> Evaluation

<img src="assets/images/project/morningapp/design.gif" width="300"/>

*The prototype*

## The Application
It's my first time doing flutter and we only have two weeks. In the final implementation, many features are discard with our main focus on speech technology. The technical detail are listed below:
- Frontend: made with Flutter, cross-platform, the app is running on both IOS and Android.
- Backend: made with Express.js, the backend invokes many API services. The weather API from(https://openweathermap.org/current), News API from (https://mediastack.com/documentation), Quote API from(https://github.com/lukePeavey/quotable#get-random-quote).
- Speech Recognition/ Synthesis: Using Microsoft Azure cognitive services. Using action maps to determine what the user wants to do.

### The final application of our morning App implemented 4 features:
- Time Clock (displays current date and time at current time zone )
- Weather ( display the weather information including visibility, wind speed, humidity and temperature)
- Daily Quote (A random quote from a famous person to motivate the day)
- Voice command. (listen users' speech to execute users' voice commands )

### App functionality in respect of HCI concepts:
- Rich animations: We want to give the user a active feedback of what the app is doing. We use loading animations to indicate the status of the application. You can see from the following screenshots.

  <img src="assets/images/project/morningapp/loading.png" width="300"/>

  *The widget is loading data from backend.*

  <img src="assets/images/project/morningapp/listening.png" width="300"/>

  *The speak widget is listening user’s voice command.*

  <img src="assets/images/project/morningapp/analyzing.png" width="300"/>

  *The speak widget is analyzing user’s speech and fetching responses.*

  <img src="assets/images/project/morningapp/speaking.png" width="300"/>

  *The speak widget is giving responses.*

- Speech Recognition/ Synthesis: when pressed the microphone button, the app starts
recording the user 's voice. Press the button again the app will stop recording and send
the recording to the backend to be analysed. Then the response will be sent back to the
application and played to the user.