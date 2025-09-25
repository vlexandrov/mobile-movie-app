import MovieInfo from "@/components/MovieInfo";
import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[650px]"
            resizeMode="stretch"
          />

          {/* movie data section */}
          <View className="flex-col items-start justify-center mt-5 px-5">
            {/* title */}
            <Text className="text-white font-bold text-xl">{movie?.title}</Text>

            {/* year + runtime */}
            <View className="flex-row items-center gap-x-1 mt-2">
              <Text className="text-light-200 text-sm">
                {movie?.release_date?.split("-")[0]}
              </Text>
              <Text className="text-light-200 text-sm">
                | {movie?.runtime}m
              </Text>
            </View>

            {/* votes */}
            <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
              <Image source={icons.star} className="size-4" />

              <Text className="text-white font-bold text-sm">
                {movie?.vote_average
                  ? movie.vote_average.toFixed(1)
                  : "No ratings"}
              </Text>

              <Text className="text-light-200 text-sm">
                ({movie?.vote_count} votes)
              </Text>
            </View>
          </View>
          {/* end of movie data section */}

          {/* more details section */}
          <MovieInfo label="Overview" value={movie?.overview} />

          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(" • ") || "N/A"}
          />

          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              // value={`$${(movie?.budget ?? 0) / 1000000} million` || "Unknown"}
              value={
                movie?.budget
                  ? `$${movie?.budget / 1000000} million`
                  : "Unknown"
              }
            />
            <MovieInfo
              label="Revenue"
              value={
                movie?.revenue
                  ? `$${(movie?.revenue / 1000000).toFixed(1)} million`
                  : "Unknown"
              }
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((p) => p.name).join(" • ") ||
              "Unknown"
            }
          />
          {/* end of more details section */}
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg flex-row justify-center items-center z-50 py-3.5"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor={"#fff"}
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
