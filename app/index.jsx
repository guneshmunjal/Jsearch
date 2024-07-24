// index.jsx
import { Redirect } from "expo-router";
// import HomeScreen from './HomeScreen'; // Make sure to import your HomeScreen component
// import WelcomeOneScreen from './WelcomeOneScreen'; // Similarly, import your WelcomeOneScreen component

export default function App() {
  return (
    <>
      <Redirect href="/WelcomeOne" />
      {/* <Redirect href="/Home" /> */}
    </>
  );
}
