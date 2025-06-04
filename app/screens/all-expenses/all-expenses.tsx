import { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import ExpensesOutput from '@/components/expenses-output/expenses-output';

import { fetchExpensesFromFireBase } from '@/utils/http';

import useStore from '@/store/store';

const AllExpenses: FC = () => {
	const {expenses, setExpenses } = useStore();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function getExpenses() {
			try {
				const fetchedExpenses = await fetchExpensesFromFireBase();
				setExpenses(fetchedExpenses);
			} catch (err) {
				setError('Failed to load expenses.');
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		}
		getExpenses();
	}, [setExpenses]);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	if (error) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{error}</Text>
			</View>
		);
	}

	return <ExpensesOutput periodName='All period' expenses={expenses} />;
};

export default AllExpenses;
