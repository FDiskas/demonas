import * as React from 'react';
import 'react-native';
import { create } from 'react-test-renderer';
jest.mock('@react-native-firebase/firestore');

import { App } from './App';

it('renders correctly', () => {
    create(<App />);
});
