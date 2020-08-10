import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreens from "./src/screens/ComponentsScreens"
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreens,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Jacopo"
    }
  }
);

export default createAppContainer(navigator);
