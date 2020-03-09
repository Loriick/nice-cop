import React from 'react';
import { View } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';

export default function Center({ children }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </View>
  );
}
