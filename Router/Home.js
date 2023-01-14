import React,{useState} from "react";
import { Image,StyleSheet,ScrollView,Text,View } from "react-native";
import img from "../Public/img.js";
import ItemData from "./Item.js";


 //state=ItemData
// [Data,setData]=useState(this.ItemData);

const styles2 =StyleSheet.create({
   
    event:{
        width:250,
        height:220,
        margin:3,
        borderWidth:1,
        borderColor:'black',
        padding:5,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    }
    })

class ItemData_class extends React.Component{
    data= (item,index)=>{
        // var t='../Public/img/img1.jpg';
        // console.log('../Public/img/img'+item.id+'.jpg');
        return(
         <View style={styles2.event} id={index}>
         <Text>{item.id}: Hello {item.name}</Text>
         <View>
         <Image source={img[item.id-1]} style={{width:200,height:100}}/>
             <Text>{item.topic}</Text>
            
             <Text>Time:{item.time}| Date:{item.date} </Text>
             <Text>Venue: {item.venue}</Text>
             <Text>About:{item.venue}</Text>
         </View>
         </View>
        );
     }

}
var ItemData_obj= new ItemData_class;
  var ItemShow=ItemData.name.map(ItemData_obj.data)
 
class Home extends React.Component{
   
    
        
     Home(){
        return(
            <View style={styles.container}>
                <ScrollView>
                <View>{ItemShow}</View>
                <Text>Nice to meet you</Text>
                </ScrollView>
            </View>
        )}
    
}
const styles =StyleSheet.create({
container:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
}
})
let r=new Home; 
export default r.Home
