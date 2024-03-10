# Logical-Expression-Resolver
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Algorithm Explanation](#algorithm-explanation)
  - [Conversion to CNF (Conjunctive Normal Form)](#conversion-to-cnf-conjunctive-normal-form)
  - [Preprocessing](#preprocessing)
  - [Resolution Process](#resolution-process)
  - [Result Determination](#result-determination)
  - [Output](#output)
- [Example](#example)
## Introduction
This project is a web application for resolving logical expressions using resolution refutation. It provides a user-friendly interface for inputting logical expressions and displays the resolution steps along with the final result.
## Features
- Input field for entering logical expressions
- Buttons for inserting logical operators and variables
- Functionality to delete characters and clear the input field
- Verification of expression validity
- Display of resolution steps and result
- Error handling for invalid expressions
## Technologies Used
- Flask for the backend server
- React for the frontend interface
- SymPy for logical expression processing and resolution
## Setup
1. Clone the repository:
  ```
  git clone https://github.com/NIHIL3D/Logical-Expression-Resolver.git
  ```
2. Navigate to the project directory:
  ```
  cd logical-expression-resolver
  ```
3. Install dependencies for the frontend and backend:
  ```
  cd frontend
  npm install
  cd ../backend
  pip install -r requirements.txt
  ```
4. Start the Flask server:
  ```
  python server.py
  ```
5. Start the React development server:
  ```
  cd ../frontend
  npm start
  ```
- Open your browser and go to http://localhost:3000 to access the application.
## Usage
1. Enter a logical expression in the input field.
2. Click on buttons to insert logical operators (&, |, ~, ->) and variables (A, B, C, D).
3. Use the delete and clear buttons to modify or reset the expression.
4. Click on "Vérifier la validité" to verify the validity of the expression.
5. View the resolution steps and final result displayed below the input field.

## Algorithm Explanation

The algorithm implemented in `resolution.py` follows the principles of resolution refutation to verify the validity of logical expressions. Here's how it works:

### 1. Conversion to CNF (Conjunctive Normal Form)

- The input logical expression is first converted to CNF using SymPy's `to_cnf` function. This ensures that the expression is in a form suitable for resolution.

### 2. Preprocessing

- Before applying resolution, the CNF expression undergoes preprocessing steps to remove redundant parentheses and ensure consistency.

### 3. Resolution Process

- The resolution process begins by iterating through pairs of clauses in the CNF expression.
- For each pair of clauses, if one clause contains the negation of a literal present in the other clause, resolution is applied. This involves removing the complementary literals and forming a new clause.
- The resulting clause is added to the set of clauses.
- This process continues until no new clauses can be generated or a contradiction is reached.

### 4. Result Determination

- If a contradiction is reached (i.e., an empty clause is derived), the expression is determined to be invalid.
- If no contradiction is reached after exhaustively applying resolution, the expression is determined to be valid.

### 5. Output

- The resolution process generates a series of steps, showing how the initial expression is resolved into simpler clauses.
- The final result (valid or invalid) is also provided.

## Example
### Input
![Screenshot_741](https://github.com/NIHIL3D/Logical-Expression-Resolver/assets/117014237/2d581402-ebd9-488e-90db-d2f80215c62b)
Above is a screenshot of the user interface where users can input logical expressions. For example, the expression `(D & ~B) | (A & B & ~C) | C | ~A | ~D` is entered in the input field.
### Result
![Screenshot_742](https://github.com/NIHIL3D/Logical-Expression-Resolver/assets/117014237/76b06d9e-692c-4ec8-a5ad-ea680348143f)
The image above displays the result of verifying the logical expression. Users can see the resolution steps and the final result (valid or invalid) based on the input expression.

