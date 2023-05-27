import SafeAreaInsetWrapper from '@src/layouts/SafeAreaInsetWrapper';
import {View, Text, FlatList} from 'react-native';
import {useGetCharactersQuery} from '@src/api/generated/graphql';

const List = () => {
  const {data, loading} = useGetCharactersQuery();
  console.log('response', data?.characters?.results, loading);

  return (
    <SafeAreaInsetWrapper>
      <View className="px-screenX pt-screenTop">
        <Text className="font-greycliffcf text-2xl leading-8 mb-6">
          Rick and Morty list
        </Text>
        <FlatList
          data={data?.characters?.results}
          renderItem={({item}) => <Text> {item?.name}</Text>}
        />
      </View>
    </SafeAreaInsetWrapper>
  );
};

export default List;
