import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function InsightsInfo() {
  const orders = 543;
  const amount = 55000;
  return (
    <View style = {styles.container}> 
          <Text style = {styles.textstylehead}>Insights for orders Today</Text>
           <View style = {styles.top}>
                <Text style = {styles.textstyle2}>Delivered Orders:</Text>
                <Text style = {styles.textstyle}>Total Orders : {orders}</Text>
                <Text style = {styles.textstyle}>Total Amount : Rs: {amount}/-</Text>
                <Text style = {styles.textstyle2}>Cancelled orders:</Text>
                <Text style = {styles.textstyle}>Total Orders :  {orders}</Text>
                <Text style = {styles.textstyle}>Total Amount : Rs:  {orders}/-</Text>
            </View>
            <Text style = {styles.textstylehead}>Insights for orders this week</Text>
           <View style = {styles.top}>
                <Text style = {styles.textstyle2}>Delivered Orders:</Text>
                <Text style = {styles.textstyle}>Total Orders : {orders}</Text>
                <Text style = {styles.textstyle}>Total Amount : Rs: {amount}/-</Text>
                <Text style = {styles.textstyle2}>Cancelled orders:</Text>
                <Text style = {styles.textstyle}>Total Orders :  {orders}</Text>
                <Text style = {styles.textstyle}>Total Amount : Rs:  {orders}/-</Text>
            </View>  <Text style = {styles.textstylehead}>Insights for orders this week</Text>
           <View style = {styles.top}>
                <Text style = {styles.textstyle2}>Delivered Orders:</Text>
                <Text style = {styles.textstyle}>Total Orders : {orders}</Text>
                <Text style = {styles.textstyle}>Total Amount : Rs: {amount}/-</Text>
                <Text style = {styles.textstyle2}>Cancelled orders:</Text>
                <Text style = {styles.textstyle}>Total Orders :  {orders}</Text>
                <Text style = {styles.textstyle}>Total Amount : Rs:  {orders}/-</Text>
            </View>
 
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex : 1,
    flexDirection: 'column'
},
top:{
  height: '30%',
  width:'100%',
  borderWidth: 2,
  borderColor: 'white',
  justifyContent: 'flex-start',
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
