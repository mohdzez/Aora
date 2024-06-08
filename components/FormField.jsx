import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import { icons } from "../constants";

const FormField = ({
  label,
  name,
  value,
  otherStyles,
  handleChangeText,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{label}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 font-psemibold w-full text-white text-base"
          value={value}
          placeholder={placeholder}
          autoComplete={keyboardType}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={name === "password" && !showPassword}
        />
        {name === "password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              className="w-6 h-6"
              resizeMode="contain"
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
