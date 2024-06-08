import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

import CustomButton from "../components/CustomButton";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            resizeMode="contain"
            className="w-[130px] h-[84px]"
            source={images.logo}
          />
          <Image
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
            source={images.cards}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
              source={images.path}
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 text-center mt-7">
            Where creativity meets inovation, Embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="auto" />
    </SafeAreaView>
  );
}
