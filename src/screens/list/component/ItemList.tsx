import {CharacterModule} from '@src/models/character';
import {Image, Text, View} from 'react-native';

const ItemList = ({image, name, species}: CharacterModule.Character) => {
  return (
    <View className="h-itemListH items-center border-solid border-t border-borderColor flex-row">
      {image && (
        <Image
          source={{uri: image}}
          className="h-avatar w-avatar rounded-full mr-4"
        />
      )}
      <View>
        <Text className="font-greycliffcfSemiBold text-base font-semibold">
          {name}
        </Text>
        <Text className="font-greycliffcf text-base text-grayText">
          {species}
        </Text>
      </View>
    </View>
  );
};

export default ItemList;
