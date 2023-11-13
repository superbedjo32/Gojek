import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Promo, Pesanan, Chat } from '../screens';
import { Home2, DiscountShape, ReceiptItem, MessageText } from 'iconsax-react-native';
import { fontType, colors } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.blue(),
                tabBarInactiveTintColor: colors.black(),
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 60,
                },
                tabBarLabelStyle: {
                    marginTop: 5,
                    fontSize: 10,
                    fontFamily: fontType['Pjs-Medium'],
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Home2
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Promo"
                component={Promo}
                options={{
                    tabBarLabel: 'Promo',
                    tabBarIcon: ({ focused, color }) => (
                        <DiscountShape
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Pesanan"
                component={Pesanan}
                options={{
                    tabBarLabel: 'Pesanan',
                    tabBarIcon: ({ focused, color }) => (
                        <ReceiptItem
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused, color }) => (
                        <MessageText
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
export default Router;