import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { screens } from './index';

const HomeStack = createStackNavigator(screens);
