import COLORS from '@/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: '#6200ee',
		alignItems: 'center',
	},
	buttonText: {
		color: COLORS.primary100,
		fontSize: 16,
	},
	flat : {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#6200ee',
	}
});


export default styles;