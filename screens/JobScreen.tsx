import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Text, View } from "react-native";
import { jobs } from "../mockData";
import { Job, RootStackScreenProps } from "../types";
import RenderHtml, { HTMLSource } from "react-native-render-html";
import { ScrollView, useWindowDimensions } from "react-native";
import CustomButton from "../components/CustomButton";
import JobDetails from "../components/JobDetails";
import { useColorScheme } from "nativewind";

export default function JobScreen({
  route,
  navigation,
}: RootStackScreenProps<"Job">) {
  const emptyJob: Job = {
    job_id: "",
    job_title: null,
    company_name: null,
    location: null,
    job_description: null,
  };
  const [jobState, setJobState] = useState(emptyJob);
  const [isLoading, setIsLoading] = useState(true);
  const { colorScheme } = useColorScheme();

  const source = {
    html: `${jobState.job_description}`,
  };

  useEffect(() => {
    const getJobById = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://go-sk.vercel.app/api/jobs/${route.params.job_id}`
        );
        const json = await res.json();
        const job: Job = json.props.job;
        setIsLoading(false);
        return setJobState(job);
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    };

    getJobById();
  }, []);

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView className="flex-1">
      {isLoading && (
        <View className="flex-1 justify-center">
          <ActivityIndicator size={"large"} color={"white"} />
        </View>
      )}
      {!isLoading && (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 50,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View className="px-2 pb-4">
            <Text className="text-3xl text-black dark:text-white">
              {jobState.job_title}
            </Text>
            <Text className="text-xl italic text-gray-400">
              {jobState.location}
            </Text>
            <Text className="text-lg  mt-2 text-black dark:text-white">
              {jobState.company_name}
            </Text>
          </View>
          <View className="mb-1 h-px w-full bg-gray-400" />
          {jobState.job_description !== null && (
            <RenderHtml
              baseStyle={{
                color: colorScheme === "dark" ? "white" : "black",
                fontSize: 18,
                width: "95%",
                alignSelf: "center",
                marginBottom: 10,
              }}
              source={source}
              contentWidth={width}
              enableExperimentalMarginCollapsing={true}
            />
          )}
          <JobDetails job={jobState} />
          <CustomButton buttonText="Apply" applyUrl={jobState.apply_url!} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
