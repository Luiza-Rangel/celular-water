import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import ActionButon from './src/components/ActionButton';

export default function App() {
    const GOAL = 2000
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="auto" />
        <View>
          <Header GOAL={GOAL} />
          <WaterProgress consumed={0} goal={GOAL}></WaterProgress>
          <ActionButon acrescimo={200}></ActionButon>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



































// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// })