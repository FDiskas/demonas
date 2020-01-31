import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';

import { WarrantyList } from 'app/WarrantyList';

interface ComponentState {
    phoneNumber: string;
    confirmCode: string;
    user: FirebaseAuthTypes.User | null;
    isConfirmInput: boolean;
    confirmHandler: Promise<FirebaseAuthTypes.ConfirmationResult>;
}

export class App extends React.Component<{}, ComponentState> {
    state = {
        phoneNumber: '',
        user: null,
        confirmCode: '',
        isConfirmInput: false,
        confirmHandler: new Promise<FirebaseAuthTypes.ConfirmationResult>((resolve) => {
            resolve();
        }),
    };
    private initializing = false;
    private confirmation: any = () => {};

    private logOut = async () => {
        this.initializing = true;
        try {
            await firebase.auth().signOut();
        } catch (e) {
            throw new Error(e);
        }
    };

    private logIn = () => {
        const { phoneNumber } = this.state;
        this.initializing = true;

        const confirmHandler = firebase.auth().signInWithPhoneNumber(phoneNumber);

        this.setState({ confirmHandler, isConfirmInput: true });
    };

    private confirmCode = async () => {
        const { confirmCode, confirmHandler } = this.state;

        try {
            (await confirmHandler).confirm(confirmCode);
        } catch (e) {
            throw new Error(e);
        }
    };

    submitConfirmCode = () => {
        this.confirmCode();
    };

    authListener = () => {
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    };

    private onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        this.setState({ user });
        if (user) {
            this.setState({ user });
        } else {
            this.setState({ user: null });
        }
        if (this.initializing) {
            this.initializing = false;
        }
    };
    onPhoneChange = (phoneNumber: string) => {
        this.setState({ phoneNumber });
    };
    onConfirmCodeChange = (confirmCode: string) => {
        this.setState({ confirmCode });
    };

    componentDidMount() {
        this.authListener();
    }

    render() {
        const { isConfirmInput, confirmCode, phoneNumber } = this.state;
        const { user } = this.state;
        return (
            <View testID="welcome" style={styles.container}>
                <Text style={styles.welcome}>TypeScript Detox Example</Text>
                <Text>Welcome {JSON.stringify(user)}</Text>
                <Button testID="button" title="Tap Me!" onPress={() => Alert.alert('Hello World!')} />
                <Text>Type some stuff below</Text>
                {user && <Button onPress={this.logOut} title="Log out" />}
                {!user && (
                    <>
                        <TextInput
                            placeholder={isConfirmInput ? 'Enter confirmation code' : 'Enter Phone number'}
                            testID="textInput"
                            autoCapitalize="none"
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            onChangeText={isConfirmInput ? this.onConfirmCodeChange : this.onPhoneChange}
                            value={isConfirmInput ? confirmCode : phoneNumber}
                        />
                        <Button
                            onPress={isConfirmInput ? this.submitConfirmCode : this.logIn}
                            title={isConfirmInput ? 'Confirm' : 'Log In'}
                        />
                    </>
                )}
                <WarrantyList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textInput: {
        width: '50%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    reversedText: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
