import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




const categoryPageOptions ={
  headerShown : false,
  animation : "slide_from_right"
}
const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: '#444',
          marginBottom: 5,
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          paddingVertical: 5,
          height: 48,
        },
        tabBarActiveTintColor: '#2874F0',
        tabBarInactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          animation: 'slide_from_bottom',
          tabBarIcon: ({focused}) => (
            <Icon
              source={focused ? 'home' : 'home-outline'}
              size={23} // Set the desired size for focused and unfocused icons
              color={focused ? myTheme.colors.primary : '#444'}
            />
          ),
        }}
        component={HomePage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              source={focused ? 'apps-box' : 'apps'}
              size={23} // Set the desired size for focused and unfocused icons
              color={focused ? myTheme.colors.primary : '#444'}
            />
          ),
        }}
        name="Categories"
        component={CategoryPage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              source={focused ? 'plus-box' : 'plus'}
              size={23}
              color={focused ? myTheme.colors.primary : '#444'}
            />
          ),
        }}
        name="Post"
        component={PostPage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              source={focused ? 'newspaper-variant' : 'newspaper-variant-outline'}
              size={23}
              color={focused ? myTheme.colors.primary : '#444'}
            />
          ),
        }}
        name="News"
        component={NewsPage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              source={focused ? 'account-circle' : 'account-circle-outline'}
              size={23}
              color={focused ? myTheme.colors.primary : '#444'}
            />
          ),
        }}
        name="Profile"
        component={UserProfile}
      />
    </Tab.Navigator>
  );

  const StackNavigator = ({isAuthenticated}) => (
    <Stack.Navigator
    // initialRouteName='home'
    initialRouteName={isAuthenticated ? 'home' : 'signin'}>
    <Stack.Screen
      name="home"
      component={TabNavigator}
      options={{headerShown: false, animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="PersonalView"
      component={PersonalView}
      options={{headerShown: false, animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="signin"
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="personalData"
      component={PersonalData1}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="personalData2"
      component={PersonalData2}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="personalData3"
      component={PersonalData3}
      options={{headerShown: false}}
    />
      </Stack.Navigator>
);

const Main = ({navigationRef}) => {
return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={myTheme.colors.primary}
        barStyle="light-content"
      />
      <Drawer.Navigator drawerContent={() => <SideBar />}>
        <Drawer.Screen name="Menu" options={{headerShown: false}}>
          {() => <StackNavigator isAuthenticated={isAuthenticated} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="AboutUs"
          options={{
            headerShown: false,
          }}
          component={AboutUs}
        />
        <Drawer.Screen
          name="Advertise"
          options={{
            headerShown: false,
          }}
          component={AdvertiseWithUs}
        />
        <Drawer.Screen
          name="TermsAndConditions"
          options={{
            headerShown: false,
          }}
          component={TermsAndConditions}
        />
        <Drawer.Screen
          name="EventsGallery"
          options={{
            headerShown: false,
          }}
          component={EventsAndGallery}
        />
        <Drawer.Screen
          name="Associates"
          options={{
            headerShown: false,
          }}
          component={Associates}
        />
        <Drawer.Screen
          name="MembershipCard"
          options={{
            headerShown: false,
          }}
          component={MemberShipCard}
        />
        <Drawer.Screen
          name="ContactUs"
          options={{
            headerShown: false,
          }}
          component={ContactUs}
        />

        <Drawer.Screen
          name="Report"
          options={{
            headerShown: false,
          }}
          component={Report}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default Main;