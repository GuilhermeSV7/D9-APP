import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  consumoAguaText: {
    fontSize: 18,
    marginBottom: 16,
  },
  iconContainer: {
    marginBottom: 32,
  },
  icon: {
    width: 100,
    height: 100,
  },
  selecaoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marcaSelecao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 8,
  },
  checked: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default styles;
