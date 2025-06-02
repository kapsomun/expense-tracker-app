import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	NavigationContainer,
	NavigationProp,
	useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import IconButton from '@/components/ui/icon-button/icon-button';

import COLORS from '@/constants/colors';

import {
	BottomTabParamList,
	NavigationProps,
	TypeRootStackParamList,
} from './navigation.types';
import routes from './routes';
import AllExpenses from '@/screens/all-expenses/all-expenses';
import ManageExpenses from '@/screens/manage-expenses/manage-expenses';
import RecentExpenses from '@/screens/recent-expenses/recent-expenses';

const RootStack = createNativeStackNavigator<TypeRootStackParamList>();

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

function TabsNavigation() {
	const navigation = useNavigation<NavigationProps>();
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: COLORS.primary500,
				},
				headerTintColor: COLORS.white,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				tabBarStyle: {
					backgroundColor: COLORS.primary500,
					borderTopColor: 'transparent',
					height: 70,
				},
				tabBarActiveTintColor: COLORS.accent500,
				tabBarInactiveTintColor: COLORS.white,
				tabBarLabelStyle: {
					fontSize: 12,
				},
				headerRight: ({ tintColor }) => (
					<IconButton
						icon='add'
						size={24}
						color={tintColor}
						onPress={() => {
							navigation.navigate({ name: routes.ManageExpenses, params: {} });
						}}
					/>
				),
			}}
		>
			<BottomTabs.Screen
				name={routes.AllExpenses}
				component={AllExpenses}
				options={{
					title: 'All Expenses',
					tabBarLabel: 'All',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='calendar' size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name={routes.RecentExpenses}
				component={RecentExpenses}
				options={{
					title: 'Recent Expenses',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='hourglass' size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
}

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: COLORS.primary500,
					},
					headerTintColor: COLORS.white,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<RootStack.Screen
					name={routes.ExpensesOverview}
					options={{ headerShown: false }}
					component={TabsNavigation}
				/>
				<RootStack.Screen
					name={routes.ManageExpenses}
					component={ManageExpenses}
					options={{
						presentation: 'modal',
					}}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
