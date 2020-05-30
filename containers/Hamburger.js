import React, { Component } from 'react'
import { Text, View, StyleSheet,Alert } from 'react-native'
import { Icon, Header} from 'native-base'
export default class Hamburger extends Component {
    createTwoButtonAlert = ({}) =>{
        
    }

    render() {
        return (
            <View>
                <Icon style={styles.Hamburger} name="menu"
                 onPress={(navigation) =>navigation.navigate('MyModal') }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Hamburger: {
        flex:1,
        marginTop:40,
        marginLeft:10,
        zIndex:100
        // marginTop: Dimensions.get('window').height,
    }
})