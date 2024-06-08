import { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setisSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.name);

      // set it to context ( global state )
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white font-psemibold mt-10 text-2xl">
            Sign Up to Aora
          </Text>

          <FormField
            label="Name"
            name="name"
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles="mt-10"
          />

          <FormField
            label="Email"
            name="email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email"
          />
          <FormField
            label="Password"
            name="password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />

          <CustomButton
            containerStyles="mt-7"
            title="Sign Up"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <Text className="text-lg font-pregular text-gray-100 text-center mt-5">
            Already an account?{" "}
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
