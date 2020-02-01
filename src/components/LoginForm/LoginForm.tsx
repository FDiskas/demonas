import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

export class LoginForm extends React.Component {
    render() {
        return (
            <Container>
                <Content padder centerContent contentContainerStyle={styles.content}>
                    <Text>LoginForm</Text>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
});
