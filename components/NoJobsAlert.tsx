import { Text, View } from "react-native";
import CustomButton from "./CustomButton";

export default function DetailsPill() {
  return (
    <View className="justify-around w-11/12 self-center  p-4 h-2/5 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-lg border-2 border-neutral-700 ">
      <Text className=" dark:text-white text-3xl">
        Sorry, no jobs right now!
      </Text>
      <Text className=" dark:text-white text-lg">
        If you work for a South Korean company and would like to advertise your
        roles here please submit it below.
      </Text>
      <CustomButton
        buttonText={"Upload a role"}
        applyUrl={"https://go-sk.vercel.app/jobUpload"}
      />
    </View>
  );
}
