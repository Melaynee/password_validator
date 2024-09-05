# Password Strength Validator

This is a simple Angular application that checks the strength of a password in real-time. The application dynamically displays the password strength based on specific criteria.

## Features

- **Real-Time Password Strength Validation**: The strength of the password is evaluated as the user types.
- **Strength Indicators**: Visual indicators (bars) change color to represent the strength of the password.
- **Password Strength Criteria**:
  - **Easy**: Contains only letters, digits, or symbols.
  - **Medium**: Contains a combination of two types (letters-symbols, letters-digits, digits-symbols).
  - **Strong**: Contains letters, symbols, and digits.

## Demo

![Password Strength Validator Demo](demo.gif) <!-- Include a GIF demonstrating the application if available. -->

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/yourusername/password-strength-validator.git
    cd password-strength-validator
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Run the application:

    ```
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

- Enter a password in the input field.
- The strength of the password will be indicated by the color of the bars below the input field:
  - **Gray**: Password field is empty.
  - **All Bars Red**: Password is short.
  - **Red**: Password weak.
  - **Yellow**: Password is medium.
  - **Green**: Password is strong.


## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request. Contributions are welcome!


