import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#678',
		justifyContent: 'flex-end'
	},
	value: {
		color: '#000',
		fontSize: 57,
		textAlign: 'right',
		marginRight: 20
	}
});

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<Text style={styles.value}>8</Text>
					<Row>
						<Button text="C" onPress={() => alert('TODO')} />
						<Button text="+/-" onPress={() => alert('TODO')} />
						<Button text="%" onPress={() => alert('TODO')} />
						<Button text="/" onPress={() => alert('TODO')} />
					</Row>

					<Row>
						<Button text="7" onPress={() => alert('TODO')} />
						<Button text="8" onPress={() => alert('TODO')} />
						<Button text="9" onPress={() => alert('TODO')} />
						<Button text="x" onPress={() => alert('TODO')} />
					</Row>

					<Row>
						<Button text="4" onPress={() => alert('TODO')} />
						<Button text="5" onPress={() => alert('TODO')} />
						<Button text="6" onPress={() => alert('TODO')} />
						<Button text="-" onPress={() => alert('TODO')} />
					</Row>

					<Row>
						<Button text="1" onPress={() => alert('TODO')} />
						<Button text="2" onPress={() => alert('TODO')} />
						<Button text="3" onPress={() => alert('TODO')} />
						<Button text="+" onPress={() => alert('TODO')} />
					</Row>

					<Row>
						<Button text="0" size="double" onPress={() => alert('TODO')} />
						<Button text="." onPress={() => alert('TODO')} />
						<Button text="=" onPress={() => alert('TODO')} />
					</Row>
				</SafeAreaView>
			</View>
		);
	}
}
