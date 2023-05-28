import {Image, Pressable} from 'react-native';

export const SearchIcon = (props: React.ComponentProps<typeof Pressable>) => (
  <Pressable className="h-5 w-5" {...props}>
    <Image source={require('./search.png')} />
  </Pressable>
);
