import {View, Text, StyleSheet, Button, Pressable} from 'react-native'
import { COLORS } from '../constants/colors'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function ActionButon({acrescimo }){
    return(
        <View>
            <Text>Adicionar Consumo:</Text>
        <View>
            <Pressable><Text>+200 ml</Text></Pressable>
            <Pressable><Text>+350 ml</Text></Pressable>
            <Pressable><Text>+500 ml</Text></Pressable>
        </View>
            
            <Button title="Reiniciar Dia"></Button>
        </View>
    )
}


const styles = StyleSheet.create({

})