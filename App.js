import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import FriendScreen from './src/screens/FriendScreen';
import ImageScreen from './src/screens/ImageScreen';
// import CounterScreen from './src/screens/CounterScreen';
import FoodScanScreen from './src/screens/FoodScanScreen';
// import ColorScreen from './src/screens/ColorScreen';
// import SquareScreen from './src/screens/SqaureScreen';
// import SurveyScreen from './src/screens/SurveyScreen';
// import BoxScreen from './src/screens/BoxScreen';
import DashboardScreen from './src/screens/DashboardScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen, 
    Friend: FriendScreen,  
    Image: ImageScreen,
    // Counter: CounterScreen,
    Food: FoodScanScreen, 
    // Color: ColorScreen,
    // Square: SquareScreen,
    // Survey: SurveyScreen, 
    // Box: BoxScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
