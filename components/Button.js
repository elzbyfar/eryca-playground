import React from 'react';

import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
	text: {
		color: '#000',
		fontSize: 32
	},
	button: {
		backgroundColor: '#46464a',
		flex: 1,
		height: buttonWidth - 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: buttonWidth,
		margin: 5
	},
	buttonDouble: {
		width: screen.width / 2 - 10,
		flex: 0,
		alignItems: 'flex-start',
		paddingLeft: 40
	}
});

export default ({ onPress, text, size }) => {
	const buttonStyles = [ styles.button ];

	if (size === 'double') {
		buttonStyles.push(styles.buttonDouble);
	}
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyles}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
