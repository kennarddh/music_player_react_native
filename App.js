import React from 'react'

// react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// components
import Header from './src/components/Header/Header'

// screens
import Home from './src/screens/Home/Home'
import Search from './src/screens/Search/Search'
import Player from './src/screens/Player/Player'

const Drawer = createDrawerNavigator()

const App = () => {
	return (
		<>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Home'>
					<Drawer.Screen
						name='Home'
						options={{
							header: props => <Header {...props} title='Home' />,
						}}
						component={Home}
					/>
					<Drawer.Screen
						name='Search'
						options={{
							header: props => <Header {...props} title='Search' />,
						}}
						component={Search}
					/>
					<Drawer.Screen
						name='Player'
						options={{
							header: props => <Header {...props} title='Player' />,
						}}
						component={Player}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</>
	)
}

export default App
