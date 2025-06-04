import { StyleSheet } from 'react-native';

import COLORS from '@/constants/colors';

const styles = StyleSheet.create({
	formContainer: {},
	inputContainer: {
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginVertical: 8,
	},
	input: {
		borderWidth: 1,
		borderColor: COLORS.primary500,
		borderRadius: 6,
		padding: 8,
		backgroundColor: COLORS.primary200,
		width: '100%',
	},
	label: {
		color: COLORS.primary200,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	buttonsContainer: {
		flexDirection: 'row',
		paddingVertical: 12,
		paddingHorizontal: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	button: {
		minWidth: 120,
		marginHorizontal: 12,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.primary200,
		padding: 16,
		borderRadius: 8,
	},
});

export default styles;
