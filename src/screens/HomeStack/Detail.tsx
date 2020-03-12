import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Owner from '../../components/Owner';

export default function Detail({ navigation, route }) {
  const {
    title,
    image,
    description,
    state,
    size,
    user,
    price,
    pictureUri,
  } = route.params.item;

  return (
    <ScrollView style={styles.detail}>
      <Image
        source={{
          uri: pictureUri
            ? pictureUri
            : `https://nice-cop.kevinmanssat.fr${image[0].url}`,
        }}
        style={styles.detail_image}
      />
      <View style={styles.detail_info}>
        <Owner
          navigation={navigation}
          user={user}
          string={`{user} want to sell`}
          ownerViewStyle={{ marginVertical: 7.5 }}
        />
        <Text style={styles.detail_info_title}>{title}</Text>
        <Text style={styles.price}>{price} €</Text>
        <View style={{ marginVertical: 30 }}>
          <Text style={styles.size}>État : {state}</Text>
          <Text style={styles.size}>Taille : {size}</Text>
        </View>
        <Text style={styles.detail_info_description}>{description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detail_image: {
    width: '100%',
    resizeMode: 'cover',
    aspectRatio: 1 / 1,
  },
  detail_info: {
    paddingHorizontal: 15,
  },
  detail_info_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fc381e',
    lineHeight: 24 * 1.5,
  },
  detail_info_description: {
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  detail_info_state: {
    color: 'green',
    fontSize: 16,
  },
  price: { fontSize: 18, fontWeight: 'bold', lineHeight: 18 * 1.5 },
  size: { fontSize: 16, lineHeight: 16 * 1.5 },
});
