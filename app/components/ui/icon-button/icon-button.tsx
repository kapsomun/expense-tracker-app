import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './icon-button.styles';



type IconButtonProps = {
	icon: keyof typeof Ionicons.glyphMap;
	size?: number;
	color?: string;
	onPress: () => void;
};

const IconButton: FC<IconButtonProps> = ({icon, size, color, onPress}) => {
	return (
		<TouchableOpacity onPress={onPress} >
			<View style={styles.container}>
				<Ionicons name={icon} size={size} color={color}   />
			</View>
		</TouchableOpacity>
	);
};

export default IconButton;
