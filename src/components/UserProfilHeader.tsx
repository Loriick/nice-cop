import React from 'react';
import moment from 'moment';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function UserProfileHeader({ user }) {
  const date = moment(user.created_at).format('DD MMMM YYYY');

  return (
    <>
      <View style={styles.user_info}>
        <Image
          source={{
            uri:
              'https://fr.screenja.com/static/img/thumbs/gohan-ssj2-1-normal-636.png',
          }}
          style={styles.user_info_image}
        />
        <View>
          <Text style={styles.user_info_text}>{user.username}</Text>
          <Text style={styles.user_info_inscription}>
            Inscrit depuis : {date}
          </Text>
        </View>
      </View>
      <Text style={styles.profile_title}>Want to sell</Text>
    </>
  );
}

const styles = StyleSheet.create({
  profile_title: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#fc381e',
  },
  user_info: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#cacaca',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  user_info_text: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18 * 1.5,
    color: '#fc381e',
  },
  user_info_inscription: {
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  user_info_image: {
    width: 100,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    marginRight: 30,
  },
});
