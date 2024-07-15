import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView,FlatList ,ImageBackground,Platform, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function MessagesScreen() {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { channelName } = route.params;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
const [showfilter,setshowfilter] = useState(false)
  useEffect(() => {
    // Fetch messages from API using channelName
    // For now, we'll use static data
    setMessages([
      {
        date: '2024-07-13T17:06:30+00:00',
        message:
          '👑 These guys are actively trading with the help of the NEW - OTC AI Navigator Pro.',
        id: 15,
      },
      {
        date: '2024-07-13T15:12:40+00:00',
        message:
          "Hello, traders! 👋 I love weekends because there's plenty of free time, calm trading.",
        id: 14,
      },
      {
        date: '2024-07-13T13:15:05+00:00',
        message:
          '📹 Hello, traders! 👋 I love weekends because theres plenty of free time, calm trading',
        id: 13,
      },
      {
        date: '2024-07-13T17:06:30+00:00',
        message:
          '👑 These guys are actively trading with the help of the NEW - OTC AI Navigator Pro.',
        id: 1,
      },
      {
        date: '2024-07-13T15:12:40+00:00',
        message:
          "Hello, traders! 👋 I love weekends because there's plenty of free time, calm trading.",
        id: 2,
      },
      {
        date: '2024-07-13T13:15:05+00:00',
        message:
          '📹 Hello, traders! 👋 I love weekends because theres plenty of free time, calm trading',
        id: 3,
      },
      {
        date: '2024-07-13T17:06:30+00:00',
        message:
          '👑 These guys are actively trading with the help of the NEW - OTC AI Navigator Pro.',
        id: 4,
      },
      {
        date: '2024-07-13T15:12:40+00:00',
        message:
          "Hello, traders! 👋 I love weekends because there's plenty of free time, calm trading.",
        id: 5,
      },
      {
        date: '2024-07-13T13:15:05+00:00',
        message:
          '📹 Hello, traders! 👋 I love weekends because theres plenty of free time, calm trading',
        id: 6,
      },
      {
        date: '2024-07-13T17:06:30+00:00',
        message:
          '👑 These guys are actively trading with the help of the NEW - OTC AI Navigator Pro.',
        id: 7,
      },
      {
        date: '2024-07-13T15:12:40+00:00',
        message:
          "Hello, traders! 👋 I love weekends because there's plenty of free time, calm trading.",
        id: 8,
      },
      {
        date: '2024-07-13T13:15:05+00:00',
        message:
          '📹 Hello, traders! 👋 I love weekends because theres plenty of free time, calm trading',
        id: 9,
      },
      {
        date: '2024-07-13T17:06:30+00:00',
        message:
          '👑 These guys are actively trading with the help of the NEW - OTC AI Navigator Pro.',
        id: 10,
      },
      {
        date: '2024-07-13T15:12:40+00:00',
        message:
          "Hello, traders! 👋 I love weekends because there's plenty of free time, calm trading.",
        id: 11,
      },
      {
        date: '2024-07-13T13:15:05+00:00',
        message:
          '📹 Hello, traders! 👋 I love weekends because theres plenty of free time, calm trading',
        id: 12,
      },
    ]);
  }, []);

  const handleRefresh = () => {
    setshowfilter(!showfilter);
    // Here you can also perform any other refresh actions like fetching new data
  };
  const renderMessages = ({item}) => (
    <View key={item.id} style={styles.card}>
    <Text style={styles.messageText}>{item.message}</Text>
    <Text style={styles.dateText}>{new Date(item.date).toLocaleString()}</Text>

  </View>

  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  return (
    <View style={styles.container}>
 <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/548/777/HD-wallpaper-bitcoin-cash-logo-3d-white-logo-3d-art-white-background-cryptocurrency-bitcoin-cash-finance-concepts-business.jpg' }} // Replace with your image URL
      style={styles.background}
    >

      {showfilter && <TouchableOpacity 
      onPress={() => showMode('date')}
      style={{margin:10}}>

        <AntDesign name='filter' size={30} color='blue' />
        {/* <Text style={{color:'red'}}>
          Filter
        </Text> */}
        </TouchableOpacity>}
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
      <FlatList
      data={messages}
      renderItem={renderMessages}
      onRefresh={handleRefresh}
        refreshing={false} 
      showsVerticalScrollIndicator={false}
      />

</ImageBackground>
      {/* <ScrollView style={styles.scrollView}>{renderMessages()}</ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20,
  },
  background:{
flex:1
  },
  card: {
    backgroundColor: '#1E90FF',
    borderTopLeftRadius: 10,
    margin:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:50,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  dateText: {
    fontSize: 10,
    color: 'white',marginHorizontal:9,
    alignSelf:"flex-end"
  },
  messageText: {
    fontSize: 16,
    color:"white"
  },
  scrollView: {
    width: '100%',
    marginTop: 20,
    maxHeight: '80%',
  },
});
