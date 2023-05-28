import SafeAreaInsetWrapper from '@src/layouts/SafeAreaInsetWrapper';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useGetCharactersQuery} from '@src/api/generated/graphql';
import {useEffect, useState} from 'react';
import {SearchBar} from '@src/components';
import ItemList from './component/ItemList';
import {CharacterModule} from '@src/models/character';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationModule} from '@src/models/navigation';

const List = ({
  navigation,
}: StackScreenProps<NavigationModule.ParamList, 'List'>) => {
  const [search, setSearch] = useState<string>('');
  const [dataList, setDataList] = useState<CharacterModule.Character[]>([]);
  const {data} = useGetCharactersQuery({variables: {name: search}});

  useEffect(() => {
    if (data?.characters?.results) {
      const listResult = data.characters.results;
      setDataList(
        listResult
          .map(item => ({
            id: item?.id ?? '',
            name: item?.name ?? '',
            image: item?.image ?? '',
            species: item?.species ?? '',
            status: item?.status ?? '',
            type: item?.type ?? '',
          }))
          .sort((a, b) => a?.name?.localeCompare(b?.name)),
      );
    }
  }, [data]);

  const handleSearch = (newText: string) => {
    setSearch(newText);
  };

  const handleMoreOptions = () => {
    console.log('more options ');
  };

  const handleOpenDetails = (item: CharacterModule.Character) => {
    navigation.navigate({name: 'Character', params: {charter: item}});
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
          data={dataList}
          renderItem={({item}) => (
            <Pressable
              key={`key-${item?.name}`}
              className="flex-column"
              onPress={() => handleOpenDetails(item)}>
              <ItemList {...item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaInsetWrapper>
  );
};

export default List;
