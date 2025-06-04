import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { FC, useLayoutEffect } from 'react';
import { View } from 'react-native';

import ExpenseForm from '@/components/manage-expense/expense-form';
import IconButton from '@/components/ui/icon-button/icon-button';

import COLORS from '@/constants/colors';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import useStore from '@/store/store';

import styles from './manage-expense.styles';
import { deleteExpenseWithSync } from '@/logic/useExpenseActions';

const ManageExpenses: FC = () => {
	const route = useRoute<RouteProp<TypeRootStackParamList>>();
	const navigation = useNavigation();
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	function getCurrentExpense() {
		const expenses = useStore(state => state.expenses);
		const selectedExpense = expenses.find(
			expense => expense.id === editedExpenseId,
		);
		if (!selectedExpense) {
			return;
		}
		return selectedExpense;
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEditing]);

	function deleteExpenseHandler() {
		if (!editedExpenseId) {
			return;
		}
		deleteExpenseWithSync(editedExpenseId);
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				getCurrentExpense={getCurrentExpense}
				isEditing={isEditing}
			/>
			{isEditing && (
				<View style={styles.buttonDelete}>
					<IconButton
						icon='trash'
						size={24}
						color={COLORS.error500}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
};

export default ManageExpenses;
