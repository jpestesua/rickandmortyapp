import {useState} from 'react';
import {MoreOptionsIcons, SearchIcon} from '@src/assets/icons';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface SearchBarProps
  extends Omit<
    React.ComponentProps<typeof TextInput>,
    'value' | 'onChangeText'
  > {
  onSearch: (searchValue: string) => void;
  onMoreOptions: () => void;
}

const SearchBar = ({onSearch, onMoreOptions, ...res}: SearchBarProps) => {
  const [text, setText] = useState<string>('');

  const handleChangeText = (newText: string) => {
    setText(newText);
  };

  const handleSearch = () => {
    onSearch(text);
  };

  const handlePressIntro = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    handleSearch();
  };

  return (
    <View className="h-38 w-full mb-38 px-3 bg-bgComponent flex-row items-center">
      <SearchIcon onPress={handleSearch} />
      <TextInput
        className="w-textComponent mx-2.5"
        value={text}
        onChangeText={handleChangeText}
        returnKeyType="search"
        onSubmitEditing={handlePressIntro}
        placeholderTextColor={'#6B7280'}
        {...res}
      />
      <MoreOptionsIcons onPress={onMoreOptions} />
    </View>
  );
};

export default SearchBar;
