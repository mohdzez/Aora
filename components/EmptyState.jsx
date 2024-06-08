import { View, Text, Image } from "react-native";

import CustomButton from "./CustomButton";
import { images } from "../constants";
import { router } from "expo-router";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center text-white font-psemibold mt-2">
        {title}
      </Text>
      <Text className="text-sm text-center text-gray-100 font-pmedium mt-2">
        {subTitle}
      </Text>

      <CustomButton
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
        title="Create Video"
      />
    </View>
  );
};

export default EmptyState;
