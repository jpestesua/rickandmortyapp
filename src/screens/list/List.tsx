import SafeAreaInsetWrapper from '@src/layouts/SafeAreaInsetWrapper';
import {View, Text, FlatList} from 'react-native';
import {useGetCharactersQuery} from '@src/api/generated/graphql';
import {useState} from 'react';
import {SearchBar} from '@src/components';

const List = () => {
  const [search, setSearch] = useState<string>('');
  const {data, loading} = useGetCharactersQuery();

  const handleSearch = (newText: string) => {
    setSearch(newText);
  };

  const handleMoreOptions = () => {
    console.log('more options');
  };

  return (
    <SafeAreaInsetWrapper>
      <View className="px-screenX pt-screenTop">
        <Text className="font-greycliffcf text-2xl leading-8 mb-6">
          Rick and Morty list
        </Text>
        <SearchBar
          placeholder="Search of filter result"
          onSearch={handleSearch}
          onMoreOptions={handleMoreOptions}
        />
        <FlatList
          data={data?.characters?.results}
          renderItem={({item}) => <Text> {item?.name}</Text>}
        />
      </View>
    </SafeAreaInsetWrapper>
  );
};

export default List;
