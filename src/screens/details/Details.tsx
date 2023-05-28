import {StackScreenProps} from '@react-navigation/stack';
import {BackArrowIcon} from '@src/assets/icons';
import SafeAreaInsetWrapper from '@src/layouts/SafeAreaInsetWrapper';
import {CharacterModule} from '@src/models/character';
import {NavigationModule} from '@src/models/navigation';
import {Image, Text, View} from 'react-native';

const Details = ({
  navigation,
  route,
}: StackScreenProps<NavigationModule.ParamList, 'Character'>) => {
  const {charter} = route.params as {
    charter: CharacterModule.Character;
  };
  console.log('props', charter);

  const handleOpenDetails = () => {
    navigation.navigate({name: 'List', params: undefined});
  };

  return (
    <SafeAreaInsetWrapper>
      <View className="px-screenX py-screenY h-full">
        <View className="mb-7">
          <BackArrowIcon onPress={handleOpenDetails} />
        </View>
        <Image
          source={{uri: charter.image}}
          className="h-bigAvatar w-bigAvatar rounded-full mr-4"
        />
        <Text className="mt-2.5 font-greycliffcfBold font-bold text-2xl">
          {charter.name}
        </Text>
        <View className="h-itemListH mt-avatar justify-center">
          <Text className="font-greycliffcfSemiBold text-base font-semibold">
            Specie
          </Text>
          <Text className="font-greycliffcf text-base text-grayText">
            {charter.species}
          </Text>
        </View>
        <View className="h-itemListH border-solid border-t border-borderColor justify-center">
          <Text className="font-greycliffcfSemiBold text-base font-semibold">
            Status
          </Text>
          <Text className="font-greycliffcf text-base text-grayText">
            {charter.status}
          </Text>
        </View>
        <View className="h-itemListH border-solid border-t border-borderColor justify-center">
          <Text className="font-greycliffcfSemiBold text-base font-semibold">
            Subspecies
          </Text>
          <Text className="font-greycliffcf text-base text-grayText">
            {charter.type ?? '--'}
          </Text>
        </View>
      </View>
    </SafeAreaInsetWrapper>
  );
};

export default Details;
