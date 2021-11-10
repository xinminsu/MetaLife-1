import React from 'react';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { CardShowcase } from '../scenes/components/card/card-showcase.component';
import { cardSettings, cardShowcase } from '../scenes/components/card/type';
import { ShowcaseContainer } from '../components/showcase-container.component';

export const DiscoverScreen = ({ navigation }): React.ReactElement => {
    const styles = useStyleSheet(themedStyle);

    return (
        <ShowcaseContainer
            style={styles.container}
            showcase={cardShowcase}
            settings={cardSettings}
            renderItem={CardShowcase}
            onBackPress={navigation.goBack}
        />
    );
};

const themedStyle = StyleService.create({
    container: {
        backgroundColor: 'background-basic-color-2',
    },
});
