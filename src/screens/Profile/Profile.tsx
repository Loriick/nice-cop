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
import UserProfileHeader from '../../components/UserProfilHeader';

export default function Profile({ navigation }) {
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { id: 3 },
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
    <FlatList
      ListHeaderComponent={UserProfileHeader(data)}
      style={styles.profile}
      contentContainerStyle={{ padding: 15 }}
      data={data.user.articles}
      numColumns={2}
      keyExtractor={(item, i) => item.title + i}
      renderItem={({ item }) => (
        <Card navigation={navigation} item={item} type="simple" />
      )}
    />
  );
}

const styles = StyleSheet.create({
  profile: {
    marginHorizontal: -7.5,
    overflow: 'visible',
    backgroundColor: '#fff',
  },
});
