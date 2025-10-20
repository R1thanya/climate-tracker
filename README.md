ClimaTrack

ClimaTrack is a simple and intuitive weather application built using HTML, CSS, and JavaScript. It allows users to check real-time weather conditions for any city by integrating the OpenWeatherMap API. The project focuses on clean UI design, API integration, and error handling while maintaining a smooth user experience.

Overview

The purpose of this project is to demonstrate the ability to consume external APIs and present dynamic data in a visually appealing way. Users can input a city name to retrieve details such as temperature, humidity, weather description, wind speed, and the local time of that location.

Features

Fetches and displays live weather information using the OpenWeatherMap API.

Shows the local time of the entered city based on its timezone offset.

User-friendly interface with a clean, modern layout.

Includes error handling for invalid or unknown city names.

Responsive design suitable for both desktop and mobile browsers.

Technologies Used
Technology	Description
HTML5	Defines the structure and layout of the web page.
CSS3	Provides styling, layout, and visual aesthetics.
JavaScript (ES6)	Handles data fetching, user input, and DOM manipulation.
OpenWeatherMap API	Supplies real-time weather data.
Project Structure
ClimaTrack/
│
├── index.html      # Main HTML structure
├── style.css       # Stylesheet for the UI
├── script.js       # JavaScript logic and API integration
└── README.md       # Project documentation

How It Works

The user enters a city name in the input field.

On clicking “Get Weather”, the application sends a request to the OpenWeatherMap API.

The API responds with weather details, which are then displayed dynamically on the page.

If the entered city is invalid, an error message is shown instead of weather data.

Setup Instructions

Download or clone the repository:

git clone https://github.com/yourusername/ClimaTrack.git


Open the project folder:

cd ClimaTrack


Launch the application:

Open index.html directly in your browser, or

Run a live server (for example, using VS Code Live Server extension).

Use your own API key (optional but recommended):

Sign up at OpenWeatherMap
 to get a free API key.

Replace the following line in script.js:

const apiKey = 'YOUR_API_KEY_HERE';

Example Output

Input:
Paris

Output:

City: Paris, FR
Local Time: 14:35:21
Temperature: 18 °C
Weather: scattered clouds
Humidity: 60%
Wind Speed: 4.1 m/s

Future Enhancements

Add 5-day forecast functionality.

Integrate location-based weather detection using geolocation API.

Implement dark and light mode options.

Include background changes based on weather conditions.

Developer

Name: Rithanya M
Course: B.Tech in Computer Science and Engineering
Year: 2nd Year
Description: A passionate learner with an interest in front-end development and real-world web applications.

License

This project is open-source and distributed under the MIT License. You are free to use, modify, and distribute it with appropriate credit.
