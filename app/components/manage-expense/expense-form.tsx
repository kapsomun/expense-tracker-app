import { useNavigation } from '@react-navigation/core';
import { FC, useState } from 'react';
import { Text, View } from 'react-native';

import { formatDate } from '@/utils/date';

import useStore from '@/store/store';

import Button from '../ui/button/button';

import Input from './input';
import styles from './styles';
import { addExpenseWithSync, updateExpenseWithSync } from '@/logic/useExpenseActions';
import {
	ExpenseFormProps,
	ExpenseType,
	InputsState,
	NewExpenseType,
} from '@/types';

const ExpenseForm: FC<ExpenseFormProps> = ({
	getCurrentExpense,
	isEditing,
}) => {
	const navigation = useNavigation();
	const expense = getCurrentExpense();
	const addExpense = useStore(state => state.addExpense);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const [inputs, setInputs] = useState<InputsState>(() => {
		return {
			amount: { value: expense ? String(expense.amount) : '', isValid: true },
			date: {
				value: expense ? formatDate(new Date(expense.date)) : '',
				isValid: true,
			},
			description: { value: expense?.description || '', isValid: true },
		};
	});

	const handleInputChange = (field: keyof InputsState, value: string) => {
		setInputs(prev => ({
			...prev,
			[field]: { value, isValid: true },
		}));
	};

	const cancelHandler = () => navigation.goBack();

	const submitHandler = async () => {
		const amount = parseFloat(inputs.amount.value);
		const date = new Date(inputs.date.value);
		const description = inputs.description.value.trim();

		const amountIsValid = !isNaN(amount) && amount > 0;
		const dateIsValid = !isNaN(date.getTime());
		const descriptionIsValid = description.length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			setInputs(prev => ({
				amount: { value: prev.amount.value, isValid: amountIsValid },
				date: { value: prev.date.value, isValid: dateIsValid },
				description: {
					value: prev.description.value,
					isValid: descriptionIsValid,
				},
			}));
			return;
		}
		setIsSubmitting(true);

		const expenseData: NewExpenseType = {
			description,
			amount,
			date,
		};

		try {
			if (isEditing && expense?.id) {
        updateExpenseWithSync(expense.id, expenseData);
			} else {
				const firebaseId = await addExpenseWithSync(expenseData);
				const newExpense: ExpenseType = {
					id: firebaseId,
					...expenseData,
				};
				addExpense(newExpense);
			}
			navigation.goBack();
		} catch (err) {
			alert('Something went wrong while saving the expense.');
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};
 

	if (isSubmitting) {
		return (
			<View style={styles.loadingContainer}>
				<Text>Submitting...</Text>
			</View>
		);
	}
	return (
		<>
			<View style={styles.formContainer}>
				<Input
					label='Amount'
					onChangeText={value => handleInputChange('amount', value)}
					inputTextConfig={{
						placeholder: '69',
						keyboardType: 'decimal-pad',
						maxLength: 10,
						value: inputs.amount.value,
					}}
				/>

				<Input
					label='Date'
					onChangeText={value => handleInputChange('date', value)}
					inputTextConfig={{
						placeholder: 'YYYY-MM-DD',
						keyboardType: 'numbers-and-punctuation',
						maxLength: 10,
						value: inputs.date.value,
					}}
				/>

				<Input
					label='Description'
					onChangeText={value => handleInputChange('description', value)}
					inputTextConfig={{
						placeholder: 'Description',
						keyboardType: 'default',
						maxLength: 100,
						multiline: true,
						numberOfLines: 5,
						value: inputs.description.value,
					}}
				/>
			</View>

			<View style={styles.buttonsContainer}>
				<Button
					title='Cancel'
					style={styles.button}
					mode='flat'
					onPress={cancelHandler}
				/>
				<Button
					title={isEditing ? 'Update' : 'Add'}
					style={styles.button}
					onPress={submitHandler}
				/>
			</View>
		</>
	);
};

export default ExpenseForm;
