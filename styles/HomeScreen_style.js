import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 10,
        textAlign: 'center',
        color: '#3498db',
      },
      subtitle: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        height: 40,
        borderColor: '#3498db',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
      },
      picker: {
        height: 40,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#3498db',
        borderWidth: 1,
      },
})