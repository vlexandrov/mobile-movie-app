//import "@/global.css";
import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold text-dark-100">Welcome!</Text>
    </View>
  );
}
