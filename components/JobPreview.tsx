import { Job } from "../types";
import { Text, View } from "react-native";
import DetailsPill from "./DetailsPill";

export default function JobsPreview({ job }: { job: Job }) {
  const extraDetails =
    job.experience_level || job.role_type || job.remote_level;

  return (
    <View className="border-2 border-neutral-700 rounded-md w-11/12 self-center mb-2 bg-neutral-900">
      <View className="rounded-md w-full self-center bg-neutral-900 p-2">
        <View>
          <Text className="text-2xl text-white font-bold  w-11/12 overflow-ellipsis">
            {job.job_title}
          </Text>
          <Text className="italic text-gray-400 text-lg">{job.location}</Text>
        </View>
        <View className="mb-2 mt-2 h-px w-full bg-gray-400" />
        <View className="flex-row justify-between">
          <Text className="text-white text-lg">{job.company_name}</Text>
        </View>
      </View>

      {extraDetails && (
        <View className="flex-row w-full pr-2 pl-2 pb-2">
          {job.experience_level && (
            <DetailsPill jobProps={job.experience_level!} />
          )}
          {job.remote_level && <DetailsPill jobProps={job.remote_level!} />}
          {job.role_type && <DetailsPill jobProps={job.role_type!} />}
        </View>
      )}
    </View>
  );
}
