import React, { useCallback } from "react";
import { Linking, Alert, TouchableOpacity } from "react-native";
import { Text } from "react-native";

interface Props {
  applyUrl?: string;
  className?: string;
  buttonText: string;
}

export default function CustomButton({
  applyUrl,
  className,
  buttonText,
}: Props) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(applyUrl!);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(applyUrl!);
    } else {
      Alert.alert(`Don't know how to open this URL: ${applyUrl}`);
    }
  }, [applyUrl]);
  return (
    <TouchableOpacity
      className="p-4 bg-indigo-700 rounded-md w-full items-center"
      onPress={handlePress}
    >
      <Text className="text-white">{buttonText}</Text>
    </TouchableOpacity>
  );
}
