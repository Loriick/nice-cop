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
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default function Form({
  values,
  openActionSheet,
  setValues,
  handleSubmit,
}) {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 15, backgroundColor: '#fff' }}
      style={{ flex: 1, backgroundColor: '#fff' }}
      keyboardDismissMode="on-drag"
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
          }}
        >
          {values.imageUri !== '' ? (
            <View
              style={{
                width: '100%',
                aspectRatio: 1 / 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}
            >
              <Image
                source={{ uri: values.imageUri }}
                style={{
                  borderRadius: 15,
                  width: '100%',
                  aspectRatio: 1 / 1,
                  resizeMode: 'cover',
                }}
              />
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                aspectRatio: 1 / 1,
                borderRadius: 15,
                backgroundColor: '#345995',
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => openActionSheet()}
              >
                <Ionicons
                  name="ios-camera"
                  size={20}
                  style={{ color: '#fff', marginRight: 10 }}
                />
                <Text style={{ color: '#fff' }}>Ajouter une Photo</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Nom du produit"
            style={style.input}
            value={values.title}
            onChangeText={(text) => setValues({ ...values, title: text })}
          />
        </View>
        <View style={{ ...style.inputContainer, minHeight: 150 }}>
          <TextInput
            placeholder="Description"
            multiline
            numberOfLines={10}
            style={{
              justifyContent: 'flex-start',
            }}
            value={values.description}
            onChangeText={(text) => setValues({ ...values, description: text })}
          />
        </View>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Prix"
            keyboardType="numeric"
            style={style.input}
            value={values.price}
            onChangeText={(text) => setValues({ ...values, price: text })}
          />
        </View>
        <View style={style.inputContainer}>
          <RNPickerSelect
            onValueChange={(value) => setValues({ ...values, state: value })}
            items={[
              { label: 'Neuf', value: 'Neuf', key: 'new' },
              { label: 'Bon état', value: 'Bon', key: 'good' },
              {
                label: 'Satisfaisant',
                value: 'Correct',
                key: 'good with conditions',
              },
              { label: 'Mauvais', value: 'Mauvais', key: 'bad' },
            ]}
            value={values.state}
          />
        </View>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Taille"
            value={values.size}
            style={style.input}
            onChangeText={(text) => setValues({ ...values, size: text })}
          />
        </View>
        <View style={style.inputContainer}>
          <RNPickerSelect
            onValueChange={(value) => setValues({ ...values, category: value })}
            items={[
              {
                label: 'Vêtements',
                value: 'clothes',
                key: 'clothes',
              },
              {
                label: 'Sneakers',
                value: 'shoes',
                key: 'shoes',
              },
              {
                label: 'Accessoires',
                value: 'accessories',
                key: 'accessories',
              },
            ]}
            value={values.category}
          />
        </View>
        <View style={style.add_button}>
          <Button title="Ajouter" onPress={() => handleSubmit()} color="#fff" />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 15,
  },
  add_button: {
    width: '100%',
    marginTop: 30,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#345995',
  },
});
