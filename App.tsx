import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Recovery from './src/screens/Recovery';
import RecoveryAux from './src/screens/RecoveryAux';
import Configurations from './src/screens/Configurations';
import Donations from './src/screens/Donations';
import News from './src/screens/News';
import Profile from './src/screens/Profile';
import Species from './src/screens/Species';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Recovery" component={Recovery} options={{headerShown:false}}/>
        <Stack.Screen name="RecoveryAux" component={RecoveryAux} options={{headerShown:false}}/>
        <Stack.Screen name="Configurations" component={Configurations} options={{headerShown:false}}/>
        <Stack.Screen name="Donations" component={Donations} options={{headerShown:false}}/>
        <Stack.Screen name="News" component={News} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Species" component={Species} options={{headerShown:false}}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}


