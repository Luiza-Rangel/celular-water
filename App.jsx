import { useState } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

// Minhas cores
const COLORS = {
  background: '#ffffff',
};

export default function App() {
  // Meta diária em ml
  const GOAL = 2000; 

  // Estado para guardar o total de água consumida
  const [consumed, setConsumed] = useState(0);

  // Soma a quantidade clicada ao total
  const handleAddWater = (ml) => {
    setConsumed((memoria) => memoria + ml);
  };

  // Zerar o contador
  const handleReset = () => {
    setConsumed(0);
  };

  return (
    <SafeAreaProvider>
      {/* Evita que o topo do telemóvel tape o conteúdo */}
      <SafeAreaView style={styles.container}>
        
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

        <View style={styles.content}>
          <Header goal={GOAL} />
          <WaterProgress consumed={consumed} goal={GOAL} />
          
          {/* Passa as funções para os botões */}
          <ActionButtons onAdd={handleAddWater} onReset={handleReset} />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Estilos da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});