import { addExpenseInFireBase, deleteExpenseFirebase, updateExpenseFirebase } from '@/utils/http';

import useStore from '@/store/store';

import {  NewExpenseType } from '@/types';

export async function addExpenseWithSync(expense: NewExpenseType) {
	const firebaseId = await addExpenseInFireBase(expense);
	return firebaseId;
}

export async function updateExpenseWithSync(
	id: string,
	updated: NewExpenseType,
) {
	await updateExpenseFirebase(id, updated);
	useStore.getState().updateExpense(id, updated);
}

export async function deleteExpenseWithSync(id: string) {
	await deleteExpenseFirebase(id);
	useStore.getState().deleteExpense(id);
}
