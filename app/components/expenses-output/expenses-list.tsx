import { FC } from 'react';
import { FlatList } from 'react-native';

import ExpensesItem from './expenses-item';

type Expense = {
	id: string;
	amount: number;
	description: string;
	date: Date;
};

interface ExpensesListProps {
	expenses: Expense[];
}

const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {

	return (
		<FlatList
			data={expenses}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <ExpensesItem {...item} />}
		/>
	);
};

export default ExpensesList;
