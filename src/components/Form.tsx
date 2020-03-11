import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ActionSheetIOS,
  Alert,
  Picker,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Button
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from 'expo';

export default function Form({ values, openActionSheet, setValues }) {
  return (
    <ScrollView style={{ flex: 1 }} keyboardDismissMode="on-drag">
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <View style={{ ...style.inputContainer, marginTop: 50 }}>
          <TextInput
            placeholder="Nom du produit"
            style={style.input}
            value={values.title}
            onChangeText={text => setValues({ ...values, title: text })}
          />
        </View>
        <View style={{ ...style.inputContainer, minHeight: 150 }}>
          <TextInput
            placeholder="Description"
            multiline
            numberOfLines={10}
            style={{
              justifyContent: 'flex-start',
              paddingLeft: 5
            }}
            value={values.description}
            onChangeText={text => setValues({ ...values, description: text })}
          />
        </View>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Prix"
            keyboardType="numeric"
            style={style.input}
            value={values.price}
            onChangeText={text => setValues({ ...values, price: text })}
          />
        </View>
        <View style={style.inputContainer}>
          <RNPickerSelect
            onValueChange={value => setValues({ ...values, state: value })}
            items={[
              { label: 'Neuf', value: 'neuf', key: 'new' },
              { label: 'Bon état', value: 'bon', key: 'good' },
              {
                label: 'Satisfaisant',
                value: 'correct',
                key: 'good with conditions'
              },
              { label: 'Mauvais', value: 'mauvais', key: 'bad' }
            ]}
            value={values.state}
          />
        </View>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Taille"
            value={values.size}
            style={style.input}
            onChangeText={text => setValues({ ...values, size: text })}
          />
        </View>
        <View style={style.inputContainer}>
          <RNPickerSelect
            onValueChange={value => setValues({ ...values, category: value })}
            items={[
              {
                label: 'Vêtements',
                value: 'clothes',
                key: 'clothes'
              },
              {
                label: 'Sneakers',
                value: 'shoes',
                key: 'shoes'
              },
              {
                label: 'Accessoires',
                value: 'accessories',
                key: 'accessories'
              }
            ]}
            value={values.category}
          />
        </View>
        <View
          style={{
            height: 400,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              height: '60%',
              width: '100%',
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: values.imageUri ? '' : 'grey',
              borderRadius: 15
            }}
          >
            {values.imageUri ? (
              <Image
                source={{ uri: values.imageUri }}
                style={{ width: '100%', aspectRatio: 1 / 1 }}
                resizeMode="contain"
              />
            ) : (
              <Text>Pas de Photo</Text>
            )}
          </View>

          <View
            style={{
              height: '10%',
              width: 200,
              borderColor: 'red',
              borderWidth: 1,
              borderRadius: 15,
              marginTop: '10%'
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1
              }}
              onPress={() => openActionSheet()}
            >
              <Ionicons
                name="ios-camera"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text>Ajouter une Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Button title="Ajouter" onPress={() => console.log(values)} />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#cacaca',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20
  },
  input: {}
});
