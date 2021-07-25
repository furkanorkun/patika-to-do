import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants/theme';

export default StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: SIZES.largeTitle,
    color: COLORS.orange,
  },
});
