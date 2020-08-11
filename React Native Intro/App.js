import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreens from "./src/screens/ComponentsScreens"
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SqareReducer from './src/screens/SqareReducer';
import CountReducer from './src/screens/CounterReducer'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreens,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CountReducer,
    Color: ColorScreen,
    Square: SqareReducer,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Jacopo"
    }
  }
);

export default createAppContainer(navigator);
