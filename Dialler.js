import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

const Home = () => {
  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${08033618259}';
    } else {
      number = 'tel:${08033618259}';
    }
    Linking.openURL(number);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openDialScreen()}>
        <Text style={styles.TextStyle}>Click to Open Dial Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Home;