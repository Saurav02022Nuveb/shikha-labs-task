# Shikha Labs Next.js Programming Task

## Overview

This project demonstrates a simple Next.js application integrated with Firebase to achieve user authentication and data storage. The app allows users to log in with Gmail, fetch data from a public API, display it on the screen, and save the data to Firebase.

## Features

- **Google Login**: Users can log in using their Gmail accounts through Firebase Authentication.
- **Fetch Data**: Data is fetched from a public API.
- **Display Data**: Fetched data is displayed on the screen.
- **Save Data**: Users can save the displayed data to Firebase.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Firebase (Authentication and Realtime Database)
- **API**: Public API for data fetching

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- Firebase account
- Google Cloud Project with Firebase enabled

### 1. Clone the Repository

```bash
git clone
cd shikha-labs-nextjs-task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing one.
3. Add a web app to your Firebase project and copy the Firebase configuration details.
4. Replace the Firebase configuration in `src/firebase.js` with your own configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
```

### 4. Start the Development Server

```bash
npm run dev
```

The app should now be running at `http://localhost:3000`.

## How to Use

1. **Login**: Go to the `/login` page and log in using your Gmail account.
2. **Fetch Data**: After logging in, you'll be redirected to the home page (`/`) where data is fetched from a public API.
3. **Save Data**: Click the "Save Data" button to store the fetched data in Firebase.

## Code Explanation

### Authentication

- **Firebase Authentication**: Users can log in using Google Sign-In.
- **Route Protection**: Users are redirected to the login page if they are not authenticated.

### Data Fetching

- **API Call**: Data is fetched from a public API.
- **Display**: Data is displayed on the home page.

### Data Saving

- **Firebase Realtime Database**: Data is saved to Firebase when the "Save" button is clicked.

## Assumptions Made

- The public API used for fetching data is stable and provides consistent results.
- Firebase setup and configuration are correctly done as per Firebase documentation.


## Contact

If you have any questions or need further assistance, please contact:

- **Connect me**: sk729584@gmail.com