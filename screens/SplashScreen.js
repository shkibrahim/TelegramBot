import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function SplashScreen() {
  const navigation = useNavigation();
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const navigateToInputScreen = () => {
    navigation.navigate('Input');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name='barchart' size={60} color='white' />
        <Text style={styles.title}>CrypSignal</Text>

      <Animated.View style={{position:'absolute',bottom:40}}>
        <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.button} onPress={navigateToInputScreen}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    height:60,
    width:300,
    alignItems:"center",
    justifyContent:'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    color: 'blue',
  },
});
