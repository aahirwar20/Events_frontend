import React, { useState, useEffect } from "react";
import{ Button ,Platform,TextInput,Text,View,StyleSheet} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import{Input} from "@rneui/themed"
//import ItemData from "./Item.js";
import axios from 'axios';
const baseUrl = 'http://172.23.14.32:5000';



 
 function Add() {
    var Item1 ={
        id:1,
        name:"",
        topic:"",
        time:"",
        date:"",
        venue:"",
        detail:"",
    }
     const [Item,useItem]=useState(Item1);
    
     let handlechange=(name,value)=>{
       // const {name} = event.target.dataset
       useItem((predata)=>({...predata, [name]:value}))}


    let handleSubmit=(event)=>{
     event.preventDefault();
     //console.log(Item)
     axios.post(`${baseUrl}/api/event`, Item).then((response) => {
        console.log(response.data);
      });;
     }
    //  var [event,setevent]=React.useState(Item);
   

return(
    <View style={style.Container}>
        
        <View style={style.BoxInput}>
    
    

        <Input style={style.NameInput}
        data-name="name"
        placeholder="Name"
        placeholderTextColor = "#9a73ef"
        onChangeText={(val)=>handlechange("name",val)}/>

         <Input style={style.NameInput}
        name="topic" 
        placeholder="Topic"
        placeholderTextColor = "#9a73ef"
        onChangeText={(val)=>handlechange("topic",val)}/>

        <Input style={style.NameInput}
        name="venue"
        placeholder="Vanue"
        placeholderTextColor = "#9a73ef"
        onChangeText={(val)=>handlechange("venue",val)}/>

       <Input style={style.NameInput}
        name="time"
        placeholder="Time"
        placeholderTextColor = "#9a73ef"
        onChangeText={(val)=>handlechange("time",val)}/>
       
       <Input style={style.NameInput}
        name="date"
        placeholder="Date"
        placeholderTextColor = "#9a73ef"
        onChangeText={(val)=>handlechange("date",val)}/>

        <Input style={style.LargeNameInput}
        name="detail"
        placeholder="Detail"
        numberOfLines={10}
        multiline={true}
        placeholderTextColor = "#9a73ef"
        onChangeText={(val)=>handlechange("detail",val)}/>

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