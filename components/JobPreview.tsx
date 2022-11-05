import { Job } from "../types";
import { Text, View } from "react-native";

export default function JobsPreview({ job }: { job: Job }) {
  return (
    <View className="bg-neutral-900 rounded-md w-11/12 self-center p-2 mb-2 border-2 border-neutral-700">
      <View>
        <Text className="text-2xl text-white">{job.job_title}</Text>
        <Text className="italic text-gray-400">{job.location}</Text>
      </View>
      <View className="mb-2 mt-2 h-px w-full bg-gray-400" />
      <View className="flex-row justify-between">
        <Text className="text-white">{job.company_name}</Text>
      </View>
    </View>
  );
}
