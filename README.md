# Marine Life App (App Vida Submarina)

A React Native mobile application built with Expo that provides information about marine life, ocean conservation, and related news. The app features user authentication, species information, news updates, and donation capabilities to support marine conservation efforts.

## Features

- **User Authentication**: Complete login, registration, and password recovery system
- **Home Dashboard**: Image carousel with interesting ocean facts
- **Marine Species**: Browse and learn about different marine species
- **News**: Stay updated with the latest marine conservation news
- **User Profile**: Manage your personal information and settings
- **Donations**: Support marine conservation initiatives
- **Configurations**: Customize your app experience

## Tech Stack

- **Framework**: React Native 0.74.2
- **Platform**: Expo ~51.0.14
- **Language**: TypeScript 5.1.3
- **Navigation**: React Navigation 6.x
- **Storage**: AsyncStorage for local data persistence
- **UI**: React Native components with custom styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for macOS) or Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd app-vida-submarina
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser

## Project Structure

```
app-vida-submarina/
├── src/
│   ├── api/           # API service layer
│   │   ├── news.ts
│   │   ├── species.ts
│   │   └── users.ts
│   ├── components/    # Reusable components
│   │   └── Navbar.tsx
│   └── screens/       # Application screens
│       ├── Configurations.tsx
│       ├── Donations.tsx
│       ├── Home.tsx
│       ├── Login.tsx
│       ├── News.tsx
│       ├── Profile.tsx
│       ├── Recovery.tsx
│       ├── RecoveryAux.tsx
│       ├── Register.tsx
│       └── Species.tsx
├── assets/            # Images and static resources
├── App.tsx           # Main application entry point
├── app.json          # Expo configuration
└── package.json      # Dependencies and scripts
```

## API Configuration

The app connects to a backend API. By default, it's configured to use:
- Base URL: `http://10.0.2.2:8080/api/` (Android emulator)

To change the API endpoint, update the `URL` constant in the API service files located in `src/api/`.

## Screens

### Authentication
- **Login**: User authentication
- **Register**: New user registration
- **Recovery/RecoveryAux**: Password recovery flow

### Main Application
- **Home**: Dashboard with ocean facts and image carousel
- **Species**: Browse marine species information
- **News**: Read latest marine conservation news
- **Profile**: View and edit user profile
- **Donations**: Support conservation efforts
- **Configurations**: App settings and preferences

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.

## Contact

For questions or support, please contact the project maintainer.
