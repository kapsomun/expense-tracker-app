import { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';
import { InputProps } from '@/types';



const Input: FC<InputProps> = ({ label, onChangeText, inputTextConfig }) => {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label}</Text>
			<TextInput {...inputTextConfig} onChangeText={onChangeText} style={styles.input} />
		</View>
	);
};

export default Input;
