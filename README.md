# Word Puzzle Game

A cross-platform word puzzle game with educational definitions and progressive difficulty.

## Features
- Letter grid for word formation
- Crossword-style clues
- Level progression with increasing difficulty
- Word definitions upon level completion
- Responsive design for mobile and web

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```
Run the app: 
# For iOS
```
expo start --ios
```
# For Android
```
expo start --android
```
# For web
```
expo start --web
```

# Configuration
For Firebase integration (optional):
Create a firebase-config.js file in the root directory

Add your Firebase configuration

## To add more words:

Edit assets/words.json with your word lists

Dependencies
React Native

Expo

React Navigation (if adding multiple screens)


## Additional Notes

1. **For Web Version**: 
   - Add `react-dom` and `react-scripts` as dependencies
   - Create a web-specific entry point (`index.web.js`)

2. **To Add Sounds**:
   - Install `expo-av` for sound effects
   - Add sound files to `assets/sounds/`

3. **For Firebase**:
   - Install `firebase` package
   - Implement user progress saving in `useLevelManager.js`

This implementation provides a complete, production-ready foundation for your word puzzle game that works on both mobile and web platforms. The code is modular and can be easily extended with additional features like hints, scoring, or multiplayer functionality.
