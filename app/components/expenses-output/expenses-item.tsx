import { NavigationProp, useNavigation } from '@react-navigation/core';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TypeRootStackParamList } from '@/navigation/navigation.types';
import routes from '@/navigation/routes';

import styles from './styles';
import { ExpenseType } from '@/store/store';

const ExpensesItem: FC<ExpenseType> = ({ id, amount, date, description }) => {
	const navigation = useNavigation<NavigationProp<TypeRootStackParamList>>();

	const expenseHandlePress = () => {
		navigation.navigate(routes.ManageExpenses, {
			expenseId: id,
		});
	};
	return (
		<TouchableOpacity onPress={expenseHandlePress}>
			<View style={styles.expenseItem}>
				<View>
					<Text style={styles.expenseItemDescription}>{description}</Text>
					<Text style={styles.expenseItemDate}>
						{date.toLocaleDateString()}
					</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.expenseItemAmount}>{amount.toFixed(2)}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ExpensesItem;
