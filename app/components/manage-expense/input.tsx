import { FC } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

interface InputProps extends TextInputProps {
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

const Input: FC<InputProps> = ({ label, onChangeText, inputTextConfig }) => {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label}</Text>
			<TextInput {...inputTextConfig} onChangeText={onChangeText} style={styles.input} />
		</View>
	);
};

export default Input;
