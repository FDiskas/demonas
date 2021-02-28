import * as React from 'react';
import { TextInput, Alert } from 'react-native';
import { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
    Container,
    Header,
    Content,
    Button,
    Text,
    Icon,
    Left,
    Title,
    Right,
    Body,
    Item,
    Form,
    Input,
    Label,
} from 'native-base';

interface ComponentState {
    phoneNumber: string;
    confirmCode: string;
    user: FirebaseAuthTypes.User | null;
    isConfirmInput: boolean;
    confirmHandler: Promise<FirebaseAuthTypes.ConfirmationResult>;
}

import BackgroundImage from 'assets/background.svg';

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
            <>
                <BackgroundImage
                    style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, resizeMode: 'stretch' }}
                    preserveAspectRatio="xMinYMin slice"
                />
                <Container testID="welcome" style={{ backgroundColor: 'transparent' }}>
                    <Header transparent>
                        <Left>
                            <Button transparent onPress={() => {}}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Check Box</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <Text>TypeScript Detox Example</Text>
                        <Title>Check Box</Title>
                        <Text>Welcome {JSON.stringify(user, undefined, 2)}</Text>
                        <Button testID="button" onPress={() => Alert.alert('Hello World!')}>
                            <Text>Tap Me!</Text>
                        </Button>

                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item>
                                <Input placeholder="Username" />
                            </Item>
                            <Item last>
                                <Input placeholder="Password" />
                            </Item>
                        </Form>

                        <Text>Type some stuff below</Text>
                        {user && (
                            <Button onPress={this.logOut}>
                                <Text>Log out</Text>
                            </Button>
                        )}
                        {!user && (
                            <>
                                <TextInput
                                    placeholder={isConfirmInput ? 'Enter confirmation code' : 'Enter Phone number'}
                                    testID="textInput"
                                    autoCapitalize="none"
                                    keyboardType="phone-pad"
                                    onChangeText={isConfirmInput ? this.onConfirmCodeChange : this.onPhoneChange}
                                    value={isConfirmInput ? confirmCode : phoneNumber}
                                />
                                <Button onPress={isConfirmInput ? this.submitConfirmCode : this.logIn}>
                                    <Text>{isConfirmInput ? 'Confirm' : 'Log In'}</Text>
                                </Button>
                            </>
                        )}
                    </Content>
                </Container>
            </>
        );
    }
}
