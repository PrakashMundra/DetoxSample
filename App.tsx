import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const [ greeting, setGreeting ] = useState("");
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onButtonPress = ( greeting: string ) => {
    setGreeting(greeting);
  };

  const val = greeting || "Welcome";
  return (
    <SafeAreaView style={ [ { flex: 1 }, backgroundStyle ] }>
      <StatusBar barStyle={ isDarkMode ? "light-content" : "dark-content" } />
      <View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
        <Text testID="text" style={ { fontSize: 25, marginTop: 20 } }>{ val }</Text>
        <TouchableOpacity testID="hello_button"
                          onPress={ () => onButtonPress("Hello") }>
          <Text style={ { color: "blue", marginTop: 20 } }>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="world_button"
                          onPress={ () => onButtonPress("World") }>
          <Text style={ { color: "blue", marginTop: 20 } }>Say World</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="goodbye_button"
                          onPress={ () => onButtonPress("Goodbye, World") }>
          <Text style={ { color: "blue", marginTop: 20 } }>Say Goodbye</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
