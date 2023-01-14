import React from "react";
import{ Button ,Platform,TextInput,Text,View,StyleSheet} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import{Input} from "@rneui/themed"
import ItemData from "./Item.js";

var Item ={
    event:{
    Id:ItemData.name.length+1,
    name:"",
    topic:"",
    time:"",
    date:"",
    venue:"",
    about:"",}
}
let handlename=(name)=>{
    //    setevent({event:{name:name}})
    
    Item.event.name=name;
       
    }
let handletopic=(topic)=>{
        Item.event.topic=topic;
    }
let handletime=(time)=>{
        Item.event.time=time;
   }
 let handlevenue=(venue)=>{
    Item.event.venue=venue;
    }
let handledate=(date)=>{
        Item.event.date=date;
        }   

let  handledetail=(detail)=>{
        Item.event.about=detail;
        }

        const storeData = async (value) => {
            try {
              const jsonValue = JSON.stringify(value)
              await AsyncStorage.setItem('Itemdata', jsonValue)
            } catch (e) {
              // saving error
            }
          }
        
         const getData = async () => {
           
           const jsonValue = await AsyncStorage.getItem('Itemdata')
              console.log(jsonValue); 
              return jsonValue != null ? JSON.parse(jsonValue) : null;
           
          }
     async function read(){
        let a= await getData();
        return a;
     }             
let reset_text=()=>{
    //  Item.event.name="";
    //  Item.event.topic="";
    //  Item.event.time="";
    //  Item.event.venue="";
    //  Item.event.about="";
    getData();
   // console.log(read());
    
 } 

 
//  async function next_step(){
//     console.log(Item.event);
//     console.log("Hello");
//     // var No_of_event=ItemData.length;
//     ItemData.name.push(Item.event);
  
//  }
let handleSubmit=()=>{
           storeData(Item.event).then(reset_text);

     }   


 function Add() {
    
    //  var [event,setevent]=React.useState(Item);
   

return(
    <View style={style.Container}>
        
        <View style={style.BoxInput}>
    
    

        <Input style={style.NameInput}
        placeholder="Name"
        placeholderTextColor = "#9a73ef"
        onChangeText={handlename}/>

         <Input style={style.NameInput}
        placeholder="Topic"
        placeholderTextColor = "#9a73ef"
        onChangeText={handletopic}/>

        <Input style={style.NameInput}
        placeholder="Vanue"
        placeholderTextColor = "#9a73ef"
        onChangeText={handlevenue}/>

       <Input style={style.NameInput}
        placeholder="Time"
        placeholderTextColor = "#9a73ef"
        onChangeText={handletime}/>
       
       <Input style={style.NameInput}
        placeholder="Date"
        placeholderTextColor = "#9a73ef"
        onChangeText={handledate}/>

        <Input style={style.LargeNameInput}
        placeholder="Detail"
        numberOfLines={10}
        multiline={true}
        placeholderTextColor = "#9a73ef"
        onChangeText={handledetail}/>

         <Button title="Create Event"
         onPress={handleSubmit}/>
        </View>
       
    </View>
);}


const style =StyleSheet.create({
    Container:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        padding:1
    },
    BoxInput:{
        borderWidth:1,
        borderColor:'black',
        width:300,
        height:500,padding:10
    },
    NameInput:{
        borderWidth:1,
        width:'70%',
        height:30,
        paddingLeft:10,
        
    },
    LargeNameInput:{
        borderWidth:1,
        width:'70%',
        height:150,
        paddingLeft:10,
        justifyContent: "flex-start",
    },
});
export default Add