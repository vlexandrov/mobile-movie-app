import React from "react";
import { Text, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value?: string | null;
}

export default function MovieInfo({ label, value }: MovieInfoProps) {
  return (
    <View className="flex-col items-start justify-center mt-5 px-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold text-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
}
