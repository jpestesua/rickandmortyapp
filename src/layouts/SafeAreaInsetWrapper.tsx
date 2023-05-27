import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

interface SafeAreaInsetWrapperProps {
  children: React.ReactNode;
}

const SafeAreaInsetWrapper: React.FC<SafeAreaInsetWrapperProps> = ({
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {children}
    </View>
  );
};

export default SafeAreaInsetWrapper;
