# Weather App

This project is a simple weather application built with React. It allows users to search for the current weather conditions of any city by fetching data from the OpenWeather API.

## Features
- Search for weather information by city name.
- Displays the following details:
  - City name
  - Weather description (e.g., clear sky, rain)
  - Temperature in Celsius
  - Humidity percentage
- Error handling for invalid city names or network issues.

## Technologies Used
- **React**: Frontend framework for building user interfaces.
- **OpenWeather API**: Provides weather data.
- **JavaScript (ES6+)**: For logic and asynchronous operations.
- **CSS**: For basic styling.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to view the app.

## How to Use
1. Enter the name of a city in the input field.
2. Click the **Search** button.
3. View the weather information displayed below the input field.

## File Structure
- **App.jsx**: Main component that manages state and handles API calls.
- **components/Heading.jsx**: Displays the app heading.
- **styles.css**: Contains styles for the application.

## API Key
This project uses the OpenWeather API. Replace the placeholder API key in `App.jsx` with your own key:
```javascript
const key = "your_api_key_here";
```
You can obtain a free API key from [OpenWeather](https://openweathermap.org/api).

## Example Code Snippet
Here is an example of the weather fetching logic:
```javascript
const handelSearch = async () => {
  const key = "your_api_key_here";
  const baseurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  try {
    const response = await fetch(baseurl);
    const data = await response.json();
    if (response.ok) {
      setWeather(data);
    } else {
      alert("City not found! Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
```

## Future Improvements
- Add more weather details, such as wind speed and pressure.
- Implement a loading spinner while fetching data.
- Improve the UI/UX with better styling and animations.
- Add geolocation support to fetch weather data for the user's current location.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---
Happy Coding!

