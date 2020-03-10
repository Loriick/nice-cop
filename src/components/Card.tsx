import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card({ navigation, item }) {
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
              uri: `https://nice-cop.kevinmanssat.fr${image[0].url}`,
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
          <View style={styles.card_user}>
            <Image
              source={{
                uri:
                  'https://fr.screenja.com/static/img/thumbs/gohan-ssj2-1-normal-636.png',
              }}
              style={styles.card_user_picture}
            />
            <Text
              style={styles.card_user_name}
              numberOfLines={1}
              onPress={() => navigation.navigate('AddArticle')}
            >
              par {user.username} et un autre
            </Text>
          </View>
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
    width: '50%',
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
    width: '100%',
  },
  card_user: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginTop: 15,
    paddingRight: 25,
  },
  card_user_picture: {
    width: 20,
    height: 20,
    borderRadius: 15,
    resizeMode: 'contain',
    marginRight: 7.5,
  },
  card_user_name: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontSize: 14,
  },
  card_description: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 / 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'nowrap',
    marginBottom: 7.5,
  },
  price: { fontSize: 18 },
  size: { fontSize: 14, opacity: 0.5 },
});
