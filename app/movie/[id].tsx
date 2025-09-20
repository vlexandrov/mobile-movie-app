import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie details: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
