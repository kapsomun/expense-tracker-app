import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './button.styles';

type ButtonProps = {
	title: string;
	onPress: () => void;
	mode?: 'flat';
	style?: object;
};

const Button: FC<ButtonProps> = ({ title, onPress, mode, style }) => {
	return (
		<View style={style}>
			<TouchableOpacity onPress={onPress} >
				<View style={[styles.button, mode === 'flat' && styles.flat]}>
					<Text style={styles.buttonText}>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Button;
