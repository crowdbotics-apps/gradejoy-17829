import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings61777Navigator from '../features/Settings61777/navigator';
import SignIn261775Navigator from '../features/SignIn261775/navigator';
import UserProfile61654Navigator from '../features/UserProfile61654/navigator';
import Tutorial61653Navigator from '../features/Tutorial61653/navigator';
import NotificationList61625Navigator from '../features/NotificationList61625/navigator';
import Settings61624Navigator from '../features/Settings61624/navigator';
import Settings61616Navigator from '../features/Settings61616/navigator';
import UserProfile61614Navigator from '../features/UserProfile61614/navigator';
import UserProfile61583Navigator from '../features/UserProfile61583/navigator';
import Tutorial61582Navigator from '../features/Tutorial61582/navigator';
import NotificationList61554Navigator from '../features/NotificationList61554/navigator';
import Settings61553Navigator from '../features/Settings61553/navigator';
import Settings61545Navigator from '../features/Settings61545/navigator';
import UserProfile61543Navigator from '../features/UserProfile61543/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings61777: { screen: Settings61777Navigator },
SignIn261775: { screen: SignIn261775Navigator },
UserProfile61654: { screen: UserProfile61654Navigator },
Tutorial61653: { screen: Tutorial61653Navigator },
NotificationList61625: { screen: NotificationList61625Navigator },
Settings61624: { screen: Settings61624Navigator },
Settings61616: { screen: Settings61616Navigator },
UserProfile61614: { screen: UserProfile61614Navigator },
UserProfile61583: { screen: UserProfile61583Navigator },
Tutorial61582: { screen: Tutorial61582Navigator },
NotificationList61554: { screen: NotificationList61554Navigator },
Settings61553: { screen: Settings61553Navigator },
Settings61545: { screen: Settings61545Navigator },
UserProfile61543: { screen: UserProfile61543Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
