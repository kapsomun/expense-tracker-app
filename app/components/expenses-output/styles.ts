import { StyleSheet } from 'react-native';

import COLORS from '@/constants/colors';

const styles = StyleSheet.create({
	container: {
		padding: 16,
		flex: 1,

		backgroundColor: COLORS.primary800,
	},
	summaryContainer: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		backgroundColor: COLORS.primary100,
		borderRadius: 8,
	},
	summaryAmount: {
		fontSize: 20,
	},

	expenseItem: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: COLORS.primary400,
		borderRadius: 8,
		marginVertical: 4,
	},
	expenseItemDescription: {
		color: COLORS.primary50,
		fontWeight: 'bold',
	},
	expenseItemAmount: {
		color: COLORS.primary400,
		fontWeight: 'bold',
	},
	expenseItemDate: {
		color: COLORS.white,
		fontSize: 12,
	},
	amountContainer: {
		backgroundColor: COLORS.white,
		padding: 8,
		borderRadius: 8,
		minWidth: 80,
		alignItems: 'center',
		justifyContent: 'center',

	},
	textInfo: {
		color: COLORS.white,
		fontSize: 16,
		textAlign: 'center',
		marginTop: 20,
	},

});

export default styles;
