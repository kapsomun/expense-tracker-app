import axios from 'axios';

const BACKEND_URL =
	'https://expense-tracker-app-ecd05-default-rtdb.europe-west1.firebasedatabase.app';

export async function storeExpense(expense: any) {
	try {
		const response = await axios.post(BACKEND_URL + '/expenses.json', expense);
		return response.data;
	} catch (error) {
		console.error('Error storing expense:', error);
		throw error;
	}
}

export async function fetchExpenses() {
	try {
		const response = await axios.get(BACKEND_URL + '/expenses.json');
		const expensesData = response.data;
		const expenses = [];
		for (const key in expensesData) {
			if (expensesData.hasOwnProperty(key)) {
				expenses.push({
					id: key,
					amount: expensesData[key].amount,
					date: new Date(expensesData[key].date),
					description: expensesData[key].description,
				});
			}
		}
		return expenses;
	} catch (error) {
		console.error('Error fetching expenses:', error);
		throw error;
	}
}
