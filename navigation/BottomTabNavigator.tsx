import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import OrdersScreen from '../screens/Orders';
import MenuScreen from '../screens/MenuScreen';
import StoreScreen from '../screens/StoreScreen';
import InsightsScreen from '../screens/InsightsScreen';
import { BottomTabParamList, OrdersParamList, MenuParamList, InsightsParamList, StoreParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Orders"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Store"
        component={StoreNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcon name="rice-bowl" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          tabBarIcon: ({ color }) => <MenuIcon name="menu" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcon name="rice-bowl" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Insights"
        component={InsightsNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcon name="insights" color={color} />,
        }}
      />
    </BottomTab.Navigator>
    
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


function MaterialIcon(props: { name: React.ComponentProps<typeof MaterialIcons>['name']; color: string }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function MenuIcon(props: { name: React.ComponentProps<typeof Feather>['name']; color: string }) {
  return <Feather size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const StoreStack = createStackNavigator<StoreParamList>();

function StoreNavigator() {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{ headerTitle: 'Store' }}
      />
    </StoreStack.Navigator>
  );
}
const OrdersStack = createStackNavigator<OrdersParamList>();

function OrdersNavigator() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{ headerTitle: 'Orders' }}
      />
    </OrdersStack.Navigator>
  );
}

const MenuStack = createStackNavigator<MenuParamList>();

function MenuNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerTitle: 'Menu Items' }}
      />
    </MenuStack.Navigator>
  );
}

const InsightsStack = createStackNavigator<InsightsParamList>();

function InsightsNavigator() {
  return (
    <InsightsStack.Navigator>
      <InsightsStack.Screen
        name="InsightsScreen"
        component={InsightsScreen}
        options={{ headerTitle: 'Bussiness Insights' }}
      />
    </InsightsStack.Navigator>
  );
}


