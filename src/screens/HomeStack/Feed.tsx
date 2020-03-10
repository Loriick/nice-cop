import React from 'react';
import { FlatList, Text } from 'react-native';
import Card from '../../components/Card';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from '../../queries/articles';

export default function Feed({ navigation }) {
  const { data, loading, error } = useQuery(GET_ARTICLES);

  if (loading) {
    return <Text>Loading...</Text>;
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
      style={{ padding: 7.5 }}
    />
  );
}
