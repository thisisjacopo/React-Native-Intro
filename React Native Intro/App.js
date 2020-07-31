import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreens from "./src/screens/ComponentsScreens"
import ListScreen from "./src/screens/ListScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreens,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Jacopo"
    }
  }
);

export default createAppContainer(navigator);
