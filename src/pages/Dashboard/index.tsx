import React, { useContext } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { useAuth } from '../../contexts/auth'
import { signIn } from '../../services/auth'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})


const Dashboard: React.FC = () => {
    const { logout, user } = useAuth()

    function handleLogout() {
        logout()
    }


    return (
        <View style={styles.container}>
            <Button title="Log Out" onPress={handleLogout}></Button>
            <Text>{user?.name}</Text>
        </View>
    )
}

export default Dashboard