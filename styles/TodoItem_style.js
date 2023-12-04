import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
      },
      deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
      },
      deleteButtonText: {
        color: 'white',
      },
})