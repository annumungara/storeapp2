import * as React from 'react';
import { StyleSheet } from 'react-native';
import InsightsInfo from '../components/InsightsInfo';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <InsightsInfo date='today'/>
      <InsightsInfo date='week'/>
      <InsightsInfo date='month'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
