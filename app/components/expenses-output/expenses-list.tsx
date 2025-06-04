import { FC } from 'react';
import { FlatList } from 'react-native';

import ExpensesItem from './expenses-item';
import { ExpensesListProps } from '@/types';


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
