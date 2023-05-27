import SafeAreaInsetWrapper from '@src/layouts/SafeAreaInsetWrapper';
import {View, Text, FlatList} from 'react-native';
import {useGetCharactersQuery} from '@src/api/generated/graphql';

const List = () => {
  const {data, loading} = useGetCharactersQuery();
  console.log('response', data?.characters?.results, loading);

  return (
    <SafeAreaInsetWrapper>
      <View className="items-center justify-center">
        <Text className="mt-8 text-blue font-bold">this is the list</Text>
        <FlatList
          data={data?.characters?.results}
          renderItem={({item}) => <Text> {item?.name}</Text>}
        />
      </View>
    </SafeAreaInsetWrapper>
  );
};

export default List;
