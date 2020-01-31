import * as React from 'react';
import 'react-native';
import { create } from 'react-test-renderer';

import { LoginForm } from './LoginForm';

it('renders correctly', () => {
    create(<LoginForm />);
});
