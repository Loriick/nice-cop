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
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Center from '../../components/Center';
import * as FileSystem from 'expo-file-system';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from 'expo';
import Form from '../../components/Form';

const initialState = {
  title: '',
  description: '',
  price: '',
  state: '',
  size: '',
  imageUri: '',
  category: ''
};

function AddArticleScreen() {
  const [values, setValues] = useState(initialState);

  function openActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Prendre une photo', 'Choisir une photo', 'Anuler'],
        cancelButtonIndex: 3
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          openCamera();
        } else if (buttonIndex === 1) {
          chooseImage();
        }
      }
    );
  }

  const chooseImage = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission obligatoire');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setValues({ ...values, imageUri: pickerResult.uri });
  };

  const openCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission obligatoire');
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      aspect: [1, 1],
      quality: 0.7
    });
    console.log(cameraResult);
  };

  return (
    <Form
      values={values}
      openActionSheet={openActionSheet}
      setValues={setValues}
    />
  );
}

const Stack = createStackNavigator();

export default function AddArticleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddArticleStack"
        options={{
          headerTitle: 'Ajouter un article'
        }}
        component={AddArticleScreen}
      />
    </Stack.Navigator>
  );
}
