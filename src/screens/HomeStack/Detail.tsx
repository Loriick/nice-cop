import React from 'react';
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native';

export default function Detail({ navigation, route }) {
  const {
    title,
    image,
    description,
    state,
    size,
    user,
    price,
  } = route.params.item;

  return (
    <ScrollView style={styles.detail}>
      <Image
        source={{ uri: `http://localhost:1337${image[0].url}` }}
        style={styles.detail_image}
      />
      <View style={styles.detail_info}>
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
    padding: 0,
  },
  detail_image: {
    width: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 / 1,
  },
  detail_info: {
    paddingHorizontal: 15,
  },
  detail_info_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detail_info_description: {
    fontSize: 16,
  },
  detail_info_state: {
    color: 'green',
    fontSize: 16,
  },
  price: { fontSize: 18 },
  size: { fontSize: 14 },
});
