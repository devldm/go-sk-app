import {
  Pressable,
  ScrollView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import JobsPreview from "../components/JobPreview";
import { Text, View } from "react-native";
import { RootStackScreenProps, Job } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { jobs } from "../mockData";

export default function JobsPreviewScreen({
  navigation,
}: RootStackScreenProps<"GO-SK">) {
  const emptyArr: Job[] = [];
  const [jobState, setJobState] = useState(emptyArr);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://go-sk.vercel.app/api/allJobs");
        const json = await res.json();
        const jobs: Job[] = json.props.jobs;
        setIsLoading(false);
        return setJobState(jobs);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    getJobs();
  }, []);

  return (
    <>
      <SafeAreaView className="w-full flex-1">
        {isLoading && (
          <ActivityIndicator
            size={"large"}
            color={"white"}
            className="justify-center flex-1"
          />
        )}
        {!isLoading && (
          <FlatList
            className=""
            contentContainerStyle={{
              paddingBottom: 50,
            }}
            data={jobState}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Job", {
                    job_id: item.job_id,
                  });
                }}
              >
                <JobsPreview job={item} />
              </Pressable>
            )}
            keyExtractor={(job) => job.job_id}
            ListHeaderComponent={() => (
              <View className="px-6  pb-9 w-full">
                <View>
                  <Text className="text-5xl font-bold text-white">Jobs</Text>
                  <Text className="text-white text-xl">
                    We partner with firms to get the best roles for people
                    looking to relocate to Seoul.
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
}
