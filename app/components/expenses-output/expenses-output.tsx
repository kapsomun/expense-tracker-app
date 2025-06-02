import { FC } from 'react';
import { Text, View } from 'react-native';

import ExpensesList from './expenses-list';
import ExpensesSummary from './expenses-summary';
import styles from './styles';

type ExpensesOutputProps = {
	periodName: string;
	expenses?: { id: string; amount: number; description: string; date: Date }[];
};

const ExpensesOutput: FC<ExpensesOutputProps> = ({ periodName, expenses }) => {
	let content = <Text>{periodName}</Text>;
	const totalExpenses =
		(expenses?.reduce((sum, expense) => sum + expense.amount, 0) ?? 0).toFixed(
			2,
		) + '$';

	if (expenses && expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	} else {
		content = <Text style={styles.textInfo}>No expenses found.</Text>;
	}

	return (
		<View style={styles.container}>
			<ExpensesSummary periodName={periodName} totalExpenses={totalExpenses} />
			{content}
		</View>
	);
};

export default ExpensesOutput;
