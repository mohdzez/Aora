import { Tabs, Redirect } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons, images } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => (
  <View className="items-center gap-1">
    <Image
      className="w-6 h-6"
      source={icon}
      resizeMode="contain"
      tintColor={color}
    />
    <Text
      style={{ color: color }}
      className={`text-xs ${focused ? "font-psemibold" : "font-pregular"}`}
    >
      {name}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                focused={focused}
                color={color}
                name="Home"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                focused={focused}
                color={color}
                name="Bookmark"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                focused={focused}
                color={color}
                name="Create"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                focused={focused}
                color={color}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
