import { create } from 'zustand';

import expenses from './dummy-data';

export type ExpenseType = {
	id: string;
	description: string;
	amount: number;
	date: Date;
};

interface ExpenseState {
	expenses: ExpenseType[];
	addExpense: (expense: ExpenseType) => void;
	deleteExpense: (id: string) => void;
	updateExpense: (id: string, updatedExpense: Partial<ExpenseType>) => void;
}

const useStore = create<ExpenseState>(set => ({
	expenses: expenses,
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
