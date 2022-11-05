/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type Job = {
  job_id: string;
  job_title: string | null;
  company_name: string | null;
  location: string | null;
  job_description: string | null;
  linkedin_url?: string | null;
  apply_url?: string | null;
  posted_datetime?: string | null;
  role_type?: string | null;
  experience_level?: string | null;
  remote_level?: string | null;
  salary_min?: number | null;
  salary_max?: number | null;
  currency?: string | null;
};

export type RootStackParamList = {
  "GO-SK": undefined;
  Modal: undefined;
  NotFound: undefined;
  Job: {
    job_id: string;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
