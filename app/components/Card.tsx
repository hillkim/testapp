import React from 'react';
import {StyleSheet, ImageURISource, Image} from 'react-native';
import {largeScreen, COLORS, RADIUS, android, CARD} from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, Button} from 'react-native-ui-lib';
import {Card} from 'react-native-ui-lib';

export interface PromotedCardProps {
  /**
   * Displays featured image
   */
  FeaturedImageURL: ImageURISource | string;

  /**
   * Displays  title
   *
   */
  title: string;

  /**
   * Attaches an onpress event
   */
  onPress: () => void;

  /**
   * width of the card
   */
  width: number;
  /**
   * height of the card
   */
  height: number;
  description?: string;
}

const PromotedCard: React.FC<PromotedCardProps> = ({
  FeaturedImageURL,
  title,
  onPress,
  width,
  height,
  description,
}) => {
  return (
    <Card
      style={[{width, height}, styles.container]}
      activeOpacity={1}
      borderRadius={RADIUS.card}
      useNative
      enableShadow
      //@ts-ignore
      activeScale={CARD.activeScale}
      backgroundColor={COLORS.white}
      onPress={onPress}>
      <Image style={styles.backgroundImage} source={FeaturedImageURL as any} />

      <LinearGradient
        colors={['rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0)']}
        style={styles.header}>
        <View>
          <Text style={styles.name}>{title}</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.15)']}
        style={styles.bottom}>
        <Text style={styles.name}>{description}</Text>
        <Button
          backgroundColor="#fff"
          label="Read More"
          labelStyle={{fontWeight: '600', color: 'black'}}
          style={{margin: 4, width: 200, alignSelf: 'center'}}
          enableShadow
          onPress={onPress}
        />
      </LinearGradient>
    </Card>
  );
};

export default React.memo(PromotedCard);

const styles = StyleSheet.create({
  container: {
    shadowOffset: {width: 0.1, height: 0.1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 0.1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'relative',
    marginRight: 10,
    marginLeft: 5,
    marginBottom: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: RADIUS.card,
    backgroundColor: 'white',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    borderRadius: RADIUS.card,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingRight: 20,
    zIndex: 3,
    paddingBottom: 20,
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: RADIUS.card,
    borderTopLeftRadius: RADIUS.card,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
    paddingTop: 10,
    left: 0,
    right: 0,
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
    paddingHorizontal: 10,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.overlay,
    position: 'absolute',
    borderRadius: RADIUS.card,
  },
  name: {
    zIndex: 3,
    fontSize: largeScreen ? 25 : 25,
    fontWeight: android ? 'bold' : '500',
    textAlign: 'center',
    color: COLORS.white,
    marginLeft: 10,
  },
});
