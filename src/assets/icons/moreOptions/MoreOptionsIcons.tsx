import {Image, Pressable} from 'react-native';

export const MoreOptionsIcons = (
  props: React.ComponentProps<typeof Pressable>,
) => (
  <Pressable className="h-4 w-4" {...props}>
    <Image source={require('./moreOptions.png')} />
  </Pressable>
);
