# Calculator Web Application

- Introduction
This project is a simple, yet visually appealing web-based calculator. Built using HTML, CSS (with SCSS considerations), and JavaScript, the calculator allows users to perform basic arithmetic operations like addition, subtraction, multiplication, division, and modulus. It also includes an animated background for an enhanced user experience.
live link https://udarasadaruwan.github.io/calculator-JS/

<h3>Table of Contents</h3>

- Introduction
- Features
- Installation
- Usage
- Code Overview
- HTML Structure
- JavaScript Logic
- Styling (CSS/SCSS)
- Dependencies
- Configuration
- Examples
- Troubleshooting

<h3>Features</h3>
Basic Arithmetic Operations: Supports addition, subtraction, multiplication, division, and modulus.
Clear Button: Allows users to reset the input and calculations.
Animated Background: Provides a dynamic and visually appealing interface.
Responsive Design: Uses Bootstrap for consistent layout and design across devices.

<h3>Installation</h3>
To use this calculator, follow these steps:

- Clone the repository:
```bash
git clone https://github.com/Udara18/calculator-JS.git
```
- Navigate to the project directory:
```bash
cd calculator-web-app
```
- Open index.html in your web browser:
```bash
open index.html
```
or double-click the index.html file.

<h3>Usage</h3>

<b>Entering Numbers:</b>

- Enter the first number in the input field and press the Enter key.
- Enter the second number in the input field and press the Enter key again.
<b>Performing Operations:</b>

Click one of the operation buttons (+, -, *, /, %) to perform the calculation.
The result will be displayed below the buttons.

<b>Clearing the Input:<b>
Press the "C" button or enter a new number after two numbers have been entered to reset the calculator and start over.


Input Field (<input>): Where users enter numbers.
Buttons (<button>): For performing arithmetic operations and clearing the input.
Display Area: Shows the entered numbers, chosen operator, and the result.


- JavaScript Logic
The JavaScript file (main.js) contains the logic for handling user input and performing calculations. Below are the core functions:

Event Listener for Enter Key: Captures user input when the Enter key is pressed and stores it as numberOne or numberTwo.
execute Function: Executes the selected arithmetic operation based on the input values.
operate Function: Displays the result of the operation.
clearAll Function: Resets the calculator for a new calculation.

- Styling (CSS/SCSS)
The styling for the calculator is defined in styles.css. The design includes:

Layout: Centered within the viewport using Flexbox.
Input Field: Styled for a sleek, modern look.
Buttons: Consistent sizing and spacing for easy interaction.
Animated Background: Adds a visually appealing, animated gradient background with moving circles.


- Dependencies
Bootstrap 5.3.3: Used for responsive design and styling.
Custom CSS: Includes additional styles and background animations.
Configuration
No additional configuration is required for this project. Simply open the index.html file in a web browser to use the calculator.

- Examples
Here's an example of how to use the calculator:

Enter `10` in the input field.
Click the `+` button.
Enter `5`.
The calculator will display the result `15`.
<br>
<br>
- Troubleshooting

Buttons Not Responding: Ensure that `main.js` is correctly linked in the `index.html` file and that JavaScript is enabled in your browser.
Background Animation Not Appearing: Verify that `styles.css` is correctly linked in the `index.html` file.
