import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InputScreen() {
  const [channelName, setChannelName] = useState('');
  const navigation = useNavigation();

  const navigateToMessagesScreen = () => {
    navigation.navigate('Messages', { channelName });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image 
      style={{width:'100%',height:280}}
      source={{uri:'https://img.freepik.com/premium-photo/3d-telegram-logo-application_353336-70.jpg'}} />
      <Text style={{color:"gray",fontSize:15,textAlign:"center",fontStyle:"italic", margin:18}}>"Unlock the Future of Finance: Join the Best Telegram Channel for Cryptocurrency Insights and Updates!"</Text>
      <TextInput
        style={styles.input}
        placeholder="Crypto Channel Name"
        value={channelName}
        onChangeText={setChannelName}
      />

<View style={{overflow:"hidden",}}>
<Image 
      style={{width:'100%',height:200,objectFit:"contain"}}
      source={{uri:'https://static.vecteezy.com/system/resources/previews/010/482/224/non_2x/light-and-dark-background-bitcoin-crypto-currency-illustration-for-page-logo-card-banner-web-and-printing-vector.jpg'}} />
     
</View>

     <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={navigateToMessagesScreen}>
        <Text style={styles.buttonText}>Fetch Messages</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    // marginTop:160,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf:"center",
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 12, 
    width:'70%',marginTop:42,
    alignSelf:"center",
    alignItems:"center",justifyContent:'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight:"bold"
  },
});
