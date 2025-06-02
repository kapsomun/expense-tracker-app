import { StyleSheet } from 'react-native';

import COLORS from '@/constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.primary800,
		padding: 16,
	},
	buttonDelete: {
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 12,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 8,
		marginHorizontal: 16,
		borderTopColor: COLORS.primary200,
		borderTopWidth: 2,
	},
});

export default styles;
