import React, { useState } from 'react';
import { ActionSheetIOS, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { createStackNavigator } from '@react-navigation/stack';
import Form from '../../components/Form';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ARTICLE } from '../../queries/createArticle';
import { GET_ARTICLES } from '../../queries/articles.js';

const initialState = {
  title: '',
  description: '',
  price: '',
  state: '',
  size: '',
  imageUri: '',
  category: '',
};

function AddArticleScreen({ navigation }) {
  const [values, setValues] = useState(initialState);
  const [picture64Base, setPicture64base] = useState(null);

  const [createArticles] = useMutation(CREATE_ARTICLE, {
    update(
      cache,
      {
        data: {
          createArticles: { article },
        },
      }
    ) {
      const { articles } = cache.readQuery({ query: GET_ARTICLES });
      cache.writeQuery({
        query: GET_ARTICLES,
<<<<<<< HEAD
        data: { articles: articles.concat(createArticles) }
=======
        data: { articles: articles.concat([article]) },
>>>>>>> form layout
      });
    },
  });

  async function handleSubmit() {
    // if (!picture64Base) {
    //   return;
    // }

    let pictureData = {
      file: picture64Base,
      upload_preset: 'raycms',
    };

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dnetrjs9c/image/upload',
      {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(pictureData),
        mode: 'cors',
      }
    );

    const resJson = await res.json();

    console.log(resJson);

    await createArticles({
      variables: {
        title: values.title,
        category: values.category,
        price: +values.price,
        state: values.state,
        user: 3,
        description: values.description,
        pictureUri: resJson.secure_url,
      },
    });
    setValues(initialState);
    await Alert.alert('Article correctement créé 🔥🔥🔥');
    await navigation.navigate('Feed');
  }

  function openActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Prendre une photo', 'Choisir une photo', 'Anuler'],
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
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

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });
    console.log(pickerResult);
    setValues({
      ...values,
      imageUri: pickerResult?.uri,
    });
    setPicture64base(`data:image/jpg;base64,${pickerResult?.base64}`);
  };

  const openCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission obligatoire');
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });
    console.log(cameraResult);
    setValues({
      ...values,
      imageUri: cameraResult?.uri,
    });
    setPicture64base(`data:image/jpg;base64,${cameraResult?.base64}`);
  };

  return (
    <Form
      values={values}
      openActionSheet={openActionSheet}
      setValues={setValues}
      handleSubmit={handleSubmit}
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
          headerTitle: 'Ajouter un article',
        }}
        component={AddArticleScreen}
      />
    </Stack.Navigator>
  );
}
