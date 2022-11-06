import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { jobs } from "../mockData";
import { Job, RootStackScreenProps } from "../types";
import RenderHtml, { HTMLSource } from "react-native-render-html";
import { ScrollView, useWindowDimensions } from "react-native";
import CustomButton from "../components/CustomButton";
import JobDetails from "../components/JobDetails";

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

  const source = {
    html: `${jobState.job_description}`,
  };

  useEffect(() => {
    const getJobById = async () => {
      try {
        const res = await fetch(
          `https://go-sk.vercel.app/api/jobs/${route.params.job_id}`
        );
        const json = await res.json();
        const job: Job = json.props.job;
        return setJobState(job);
      } catch (err) {
        console.error(err);
      }
    };

    getJobById();
  });

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View className="px-2 pb-4">
          <Text className="text-3xl text-white">{jobState.job_title}</Text>
          <Text className="text-xl italic text-gray-400">
            {jobState.location}
          </Text>
          <Text className="text-lg text-white mt-2">
            {jobState.company_name}
          </Text>
        </View>
        <View className="mb-1 h-px w-full bg-gray-400" />
        <RenderHtml
          baseStyle={{
            color: "white",
            fontSize: 18,
            width: "95%",
            alignSelf: "center",
            marginBottom: 10,
          }}
          source={source}
          contentWidth={width}
          enableExperimentalMarginCollapsing={true}
        />
        <JobDetails job={jobState} />
        <CustomButton buttonText="Apply" applyUrl={jobState.apply_url!} />
      </ScrollView>
    </SafeAreaView>
  );
}
