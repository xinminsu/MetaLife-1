import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../components/icons';
import ContentView from '../layouts/messaging/chat-1';

export const MessagesScreen = ({ navigation }): React.ReactElement => {

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.container}
            insets='top'>
            <TopNavigation
                title='Helen Kuper'
                subtitle='Last seen just now'
                accessoryLeft={renderBackAction}
            />
            <ContentView/>
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        tintColor: null,
    },
});
