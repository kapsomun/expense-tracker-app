import { TextInputProps } from 'react-native';

export type NewExpenseType = {
	description: string;
	amount: number;
	date: Date;
};

export type ExpenseType = NewExpenseType & {
	id: string;
};

export interface ExpensesListProps {
	expenses: ExpenseType[];
}

export interface ExpenseFormProps {
	getCurrentExpense: () => ExpenseType | undefined;
	isEditing?: boolean;
}


export interface InputProps extends TextInputProps {
	label: string;
	onChangeText: (text: string) => void;
	inputTextConfig: {
		placeholder: string;
		keyboardType?: TextInputProps['keyboardType'];
		secureTextEntry?: boolean;
		maxLength?: number;
		multiline?: boolean;
		numberOfLines?: number;
		value?: any;
	};
}

export type InputField = {
	value: string;
	isValid: boolean;
};

export type InputsState = {
	amount: InputField;
	date: InputField;
	description: InputField;
};
