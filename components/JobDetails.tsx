import { Job } from "../types";
import { Text, View } from "react-native";

export default function JobDetails({ job }: { job: Job }) {
  const extraDetails =
    job.experience_level || job.role_type || job.remote_level;

  return (
    <>
      {extraDetails && (
        <View className="border-2 border-neutral-700 rounded-md w-full self-center mb-2 bg-neutral-100 dark:bg-neutral-900">
          <View className="w-full p-4">
            <Text className=" dark:text-white text-2xl mb-2">Job Details</Text>
            {job.experience_level && (
              <View className="flex-row justify-between mb-1">
                <Text className=" dark:text-white text-lg">
                  Experience level
                </Text>
                <Text className=" dark:text-white text-lg">
                  {job.experience_level}
                </Text>
              </View>
            )}
            {job.remote_level && (
              <View className="flex-row justify-between mb-1">
                <Text className=" dark:text-white text-lg">Remote level</Text>
                <Text className=" dark:text-white text-lg">
                  {job.remote_level}
                </Text>
              </View>
            )}
            {job.role_type && (
              <View className="flex-row justify-between mb-1">
                <Text className=" dark:text-white text-lg">Role type</Text>
                <Text className=" dark:text-white text-lg">
                  {job.role_type}
                </Text>
              </View>
            )}
            {job.salary_min && job.salary_max && (
              <View className="flex-row justify-between w-full mb-1">
                <Text className=" dark:text-white text-lg">
                  Salary range {job.currency && `(${job.currency})`}
                </Text>
                <Text className=" dark:text-white text-lg">
                  {job.salary_min} - {job.salary_max}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
}
