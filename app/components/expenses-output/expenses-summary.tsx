import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type ExpensesSummaryProps = {
	periodName: string;
  totalExpenses: string;
};

const ExpensesSummary: FC<ExpensesSummaryProps> = ({ periodName,totalExpenses }) => {
	return (
		<View style={styles.summaryContainer}>
			<Text>{periodName}</Text>
      <Text style={styles.summaryAmount}>{totalExpenses}</Text>
		</View>
	);
};

export default ExpensesSummary;
