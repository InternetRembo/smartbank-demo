import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function ConfirmEmailScreen() {
  const navigation = useNavigation<Props>();

  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 pt-1 pb-7">
        <View className="w-full h-11 justify-center">
          <Pressable
            className="absolute top-0 left-0 w-11 h-11 items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-1">
          <Image
            style={{ resizeMode: "cover" }}
            className="flex-1 w-full"
            source={require("../assets/planes.png")}
          />
        </View>
        <View className="px-4">
          <Text className="mt-1 text-[34px] font-bold text-white text-center">
            Confirm your email
          </Text>
          <Text className="mt-2 font-medium text-neutral-300 text-center text-[13px] mb-8">
            We just send you an email to office@designmesocial.com
          </Text>
          <Pressable
            className={classNames(
              "w-full items-center justify-center rounded-xl h-12 bg-[#E8F569] mb-4"
            )}
          >
            <Text
              className={classNames("font-bold text-[16px] text-[#134555]")}
            >
              Open email app
            </Text>
          </Pressable>
          <Pressable
            className={classNames(
              "w-full items-center justify-center rounded-xl h-12 bg-[#265565]"
            )}
          >
            <Text className={classNames("font-bold text-[16px] text-white")}>
              I didn't receive my email
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}