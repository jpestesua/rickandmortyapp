import {Image, Pressable} from 'react-native';

export const BackArrowIcon = (
  props: React.ComponentProps<typeof Pressable>,
) => (
  <Pressable className="h-3.5 w-4.5" {...props}>
    <Image source={require('./backArrow.png')} />
  </Pressable>
);
