import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function InsightsInfo({ date }: { date: string }) {
  const amount = 55000;
  const orders = 543;
  return (
    <View style = {styles.container}> 
          <Text style = {styles.textstylehead}>Insights for orders {date}</Text>
           <View style = {styles.top}>
             <View style={styles.t}>
                <Text style = {styles.textstyle2}>Delivered Orders</Text>
                <Text style = {styles.textstyle}> Orders : {orders}</Text>
                <Text style = {styles.textstyle}> Amount : Rs: {amount}/-</Text>
            </View>
            <View style={styles.t}>
                <Text style = {styles.textstyle2}>Cancelled orders</Text>
                <Text style = {styles.textstyle}> Orders :  {orders}</Text>
                <Text style = {styles.textstyle}> Amount : Rs:  {orders}/-</Text>
            </View>
            </View>
            
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex : 1,
},
top:{
  width:'100%',
  borderWidth: 2,
  flexDirection:'row',
  borderColor: 'white',
  justifyContent: 'flex-start',
  backgroundColor: '#1CACB9'
},
t:{
  backgroundColor: '#1CACB9'

},
topnext:{
  flex : 1,
  height: '25%',
  flexDirection: 'row',
  margin: '0.1%'
},
textstylehead:{
  color:'black',
  margin: 1,
  fontSize:20,
  marginLeft:10,
  marginTop:1
},
textstyle2:{
  color:'white',
  margin: 1,
  marginLeft:10,
  marginTop:1,
  fontSize:20
},
textstyle:{
  color:'white',
  margin: 1,
  marginLeft:10,
  marginTop:1
}
});
