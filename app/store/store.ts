import { create } from 'zustand';

import expenses from './dummy-data';
import { ExpenseType } from '@/types';

interface State {
	expenses: ExpenseType[];
	setExpenses: (expenses: ExpenseType[]) => void;
	addExpense: (expense: ExpenseType) => void;
	deleteExpense: (id: string) => void;
	updateExpense: (id: string, updatedExpense: Partial<ExpenseType>) => void;
}

const useStore = create<State>(set => ({
	expenses: expenses,
	setExpenses: expenses => set({ expenses }),
	addExpense: expense =>
		set(state => ({
			expenses: [...state.expenses, expense],
		})),

	deleteExpense: id =>
		set(state => ({
			expenses: state.expenses.filter(expense => expense.id !== id),
		})),
	updateExpense: (id, updatedExpense) =>
		set(state => ({
			expenses: state.expenses.map(expense =>
				expense.id === id ? { ...expense, ...updatedExpense } : expense,
			),
		})),
}));

export default useStore;
