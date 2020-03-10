import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Owner({
  navigation,
  user,
  string: string = '',
  ownerViewStyle,
}) {
  return (
    <View style={{ ...styles.owner, ...ownerViewStyle }}>
      <Image
        source={{
          uri:
            'https://fr.screenja.com/static/img/thumbs/gohan-ssj2-1-normal-636.png',
        }}
        style={styles.owner_user_picture}
      />
      <Text
        style={styles.owner_user_name}
        numberOfLines={1}
        onPress={() => navigation.navigate('AddArticle')}
      >
        {string ? string.replace('{user}', user.username) : user.username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  owner: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginTop: 15,
    paddingRight: 25,
  },
  owner_user_picture: {
    width: 20,
    aspectRatio: 1 / 1,
    borderRadius: 15,
    resizeMode: 'contain',
    marginRight: 7.5,
  },
  owner_user_name: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontSize: 14,
  },
});
