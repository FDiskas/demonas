import React from 'react';

import 'react-native';
import { create } from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
    create(<App />);
});