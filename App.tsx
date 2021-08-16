/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import HomeScreen from './src/components/screens/homeScreen';
 import DetailScreen from './src/components/screens/detailScreen';
 import { Scene, Router } from 'react-native-router-flux'; 

 const App = () => {
   return (
     <Router>
       <Scene key="root">
         <Scene
          key="home"
          component={HomeScreen}
          title="Albums List"
          initial={true}
         />
         <Scene
          key="detail"
          component={DetailScreen}
          title="Album detail"
         />
       </Scene>
     </Router>
   );
 };

 export default App;
