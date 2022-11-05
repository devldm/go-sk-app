import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { jobs } from "../mockData";
import { Job, RootStackScreenProps } from "../types";
import RenderHtml, { HTMLSource } from "react-native-render-html";
import { ScrollView, useWindowDimensions } from "react-native";
import CustomButton from "../components/CustomButton";

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
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <View className="px-2 pb-4">
          <Text className="text-4xl text-white">{jobState.job_title}</Text>
          <Text className="text-xl italic text-white">{jobState.location}</Text>
          <Text className="text-lg text-white">{jobState.company_name}</Text>
        </View>
        <View className="mb-2 mt-1 h-px w-full bg-gray-400" />
        <RenderHtml
          baseStyle={{
            color: "white",
            fontSize: 18,
            width: "95%",
            alignSelf: "center",
            marginBottom: 30,
          }}
          source={source}
          contentWidth={width}
          enableExperimentalMarginCollapsing={true}
        />
        <CustomButton buttonText="Apply" applyUrl={jobState.apply_url!} />
      </ScrollView>
    </SafeAreaView>
  );
}
