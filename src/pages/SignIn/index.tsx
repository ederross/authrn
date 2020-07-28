import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import {useAuth} from '../../contexts/auth'
import { signIn } from '../../services/auth'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})


const SignIn: React.FC = () => {
    const { signed, user, signIn } = useAuth()

    console.log(signed)
    console.log(user)

    function handleSigIn() {
        signIn() 
    }


    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={handleSigIn}></Button>
        </View>
    )
}

export default SignIn