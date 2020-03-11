import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import Card from '../../components/Card';
import { GET_USER_BY_ID } from '../../queries/users';
import Center from '../../components/Center';
import {
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import moment from 'moment';

export default function Profile({ navigation }) {
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { id: 4 },
  });

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <ScrollView style={styles.profile} contentContainerStyle={{ padding: 15 }}>
      <View style={styles.user_info}>
        <Image
          source={{
            uri:
              'https://fr.screenja.com/static/img/thumbs/gohan-ssj2-1-normal-636.png',
          }}
          style={styles.user_info_image}
        />
        <View style>
          <Text style={styles.user_info_text}>{data.user.username}</Text>
          <Text style={styles.user_info_inscription}>
            Inscrit depuis :{' '}
            {moment(data.user.created_at).format('DD MMMM YYYY')}
          </Text>
        </View>
      </View>
      <Text style={styles.profile_title}>Want to sell</Text>
      <FlatList
        data={data.user.articles}
        numColumns={2}
        keyExtractor={(item, i) => item.title + i}
        renderItem={({ item }) => (
          <Card navigation={navigation} item={item} type="simple" />
        )}
        style={{
          marginHorizontal: -7.5,
          overflow: 'visible',
          backgroundColor: '#fff',
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#fff',
  },
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
