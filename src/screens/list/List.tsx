import SafeAreaInsetWrapper from '@src/layouts/SafeAreaInsetWrapper';
import {View, Text, FlatList} from 'react-native';
import {useGetCharactersQuery} from '@src/api/generated/graphql';
import {useState} from 'react';
import {SearchBar} from '@src/components';
import ItemList, {ItemListProps} from './component/ItemList';

const List = () => {
  const [search, setSearch] = useState<string>('');
  const {data, loading} = useGetCharactersQuery();

  const handleSearch = (newText: string) => {
    setSearch(newText);
  };

  const handleMoreOptions = () => {
    console.log('more options ');
  };

  return (
    <SafeAreaInsetWrapper>
      <View className="px-screenX py-screenY h-full">
        <Text className="font-greycliffcfBold font-bold text-2xl leading-8 mb-6">
          Rick and Morty list
        </Text>
        <SearchBar
          placeholder="Search of filter result"
          onSearch={handleSearch}
          onMoreOptions={handleMoreOptions}
        />
        <FlatList
          className="mb-screenY"
          data={data?.characters?.results}
          renderItem={({item}) => (
            <View key={`key-${item?.name}`} className="flex-column">
              <ItemList
                name={item?.name}
                image={item?.image}
                specie={item?.species}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaInsetWrapper>
  );
};

export default List;
