import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import Card from '../../components/Card';
import { GET_ARTICLES } from '../../queries/articles';
import Center from '../../components/Center';

export default function Feed({ navigation }) {
  const { data, loading, error } = useQuery(GET_ARTICLES);

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
      data={data.articles}
      numColumns={2}
      keyExtractor={(item, i) => item.title + i}
      renderItem={({ item }) => <Card navigation={navigation} item={item} />}
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{ padding: 7.5 }}
    />
  );
}
