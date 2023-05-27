import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Filter = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text>this is the Filter</Text>
    </View>
  );
};

export default Filter;
