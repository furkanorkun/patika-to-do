import {StyleSheet} from 'react-native';

import {SIZES} from '../../constants/theme';

export default StyleSheet.create({
  inputContainer: {
    marginTop: 'auto',
    borderRadius: SIZES.borderRadius,
    backgroundColor: 'rgb(47,62,69)',
    padding: SIZES.padding,
  },
  input: {
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(101,126,137)',
  },
});
