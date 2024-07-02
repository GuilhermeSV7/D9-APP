import { StyleSheet } from 'react-native';

const iconSize = 100; // Tamanho dos ícones

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconContainer: {
    width: iconSize,
    height: iconSize,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: iconSize - 10,
    height: iconSize - 10,
    resizeMode: 'contain',
  },
});

export default styles;
