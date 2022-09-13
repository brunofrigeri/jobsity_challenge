# Jobsity Challenge

Implementation of the Jobsity Challenge, regarding an application using the `tvmaze` api for a Series display.

## Structure

### Folder
The folder structure follow a really simple guideline, which is divided in:
```
jobsity_challenge_app
│
└───src
│   └───components
│   └───hooks
│       │   useDebounce.ts - Hook for debounce a value
│   └───lib
│       │   react-query.ts - Helper for initializing a queryClient
│   └───navigation
│       │   index.tsx - Creation of Stack Navigation
│   └───screens
│       │   Home - List with all shows displayed
│       │   Show - Display show by its id
│       │   Search - Search for any Show by querying the name
│       │   Episode - Display episode by its id
│   └───services
│       │   index.ts - Created instance for Axios
│       │   keys.ts - Keys for having unique cache save on react-query
│       │   types.ts - Global Types used for all data returned from the API
│   └───styles
│       │   index.ts - All global styles followed by the whole application
```

### Services

The services are using `react-query` as the lib for querying from the API. The choose for using `react-query` is that is an easy dependency to use, cache is well implemented and maintainable. Besides that, uses an idea of queries and mutations.

### Dependencies

- `react-query`: For handling async state management
- `axios`: Handling API calls
- `@react-navigation/~`: For creating navigation stacks and easy the job of navigating between screens
- `react-native-render-html`: For handling the summary that comes in HTML form
- `react-native-config`: For handling ENV files
- `@gorhom/bottom-sheet`: For creating Trays that present a wonderful UX
- `@fortawesome/~`: Adding icons within the application

## How to test locally

### Clone the Repository
You can clone the repository copying the following:
```bash
https://github.com/brunofrigeri/jobsity_challenge.git
```

### Steps to Test
- You will need to set up your React Native environment. Make sure you have React Native already installed in your machine. You can follow this guide for setting up your environment: [React Native ENV Guide](https://reactnative.dev/docs/environment-setup)
- After that, you'll need to install the project dependencies:
```bash
yarn install && cd ios && pod install && cd ..
```
- Start the metro bundler to run locally tests;
```bash
yarn start
```

Now, your development environment is all set up and you can start testing. 
- The last step is setting up the API_URL on the `.env` file. Create a `.env` file in the root of the project and add the `tvmaze` api URL to it:
```
API_URL=https://api.tvmaze.com/
```

- To start testing you need to run the App on some Platform (iOS or Android), for that, you can copy the following commands:

```bash
yarn android
```
or
```bash
yarn ios
```

## How to test through APK

- Go to the Distribution folder and download the APK into your Android phone