import { Job } from "../types";
import { Text, View } from "react-native";

interface DetailsPillProps {
  jobProps: string;
}

export default function DetailsPill({ jobProps }: DetailsPillProps) {
  return (
    <View>
      <Text className="border-2 dark:text-white border-indigo-800 p-2 rounded-full w-20 h-9 text-center mr-2">
        {jobProps}
      </Text>
    </View>
  );
}
