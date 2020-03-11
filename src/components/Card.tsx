import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Owner from './Owner';

export default function Card({ navigation, item, type }) {
  const { title, image, size, user, price } = item;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate('Detail', { item })}
        >
          <Image
            source={{
              uri:
                image.length > 0
                  ? `https://nice-cop.kevinmanssat.fr${image[0].url}`
                  : item.pictureUri
            }}
            style={styles.img}
          />
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.card_description}>
            <Text style={styles.price}>{price} €</Text>
            <Text style={styles.size}>Taille : {size}</Text>
          </View>
          {type !== 'simple' && (
            <Owner navigation={navigation} user={user} string={`par {user}`} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    width: '50%'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#cacaca',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
    padding: 20,
    width: '100%'
  },
  card_description: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 / 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'nowrap',
    marginBottom: 7.5,
    color: '#fc381e'
  },
  price: { fontSize: 18, fontWeight: 'bold' },
  size: { fontSize: 14, opacity: 0.5 }
});
