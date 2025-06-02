import { FC } from 'react';

import ExpensesOutput from '@/components/expenses-output/expenses-output';

import { getDateMinusDays } from '@/utils/date';

import useStore from '@/store/store';

const RecentExpenses: FC = () => {
	const expenses = useStore(state => state.expenses);

	const recentExpenses = expenses.filter(expense => {
		const today = new Date();
		const sevenDaysAgo = getDateMinusDays(today, 7);
		return expense.date >= sevenDaysAgo && expense.date <= today;
	});

	return <ExpensesOutput periodName='Last 7 days' expenses={recentExpenses} />;
};

export default RecentExpenses;
