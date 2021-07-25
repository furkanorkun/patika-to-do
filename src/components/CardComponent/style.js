import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants/theme';

export default StyleSheet.create({
  card: {
    margin: SIZES.padding / 2,
    borderRadius: SIZES.borderRadius,
  },
  cardTitle: {
    fontSize: SIZES.body,
    color: COLORS.white,
    padding: SIZES.padding / 2,
  },
});
