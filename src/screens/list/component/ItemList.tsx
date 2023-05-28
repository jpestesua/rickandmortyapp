import {Image, Text, View} from 'react-native';

export interface ItemListProps {
  image?: string | null;
  name?: string | null;
  specie?: string | null;
}

const ItemList = ({image, name, specie}: ItemListProps) => {
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
          {specie}
        </Text>
      </View>
    </View>
  );
};

export default ItemList;
