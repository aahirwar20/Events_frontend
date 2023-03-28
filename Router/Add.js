import React, { useState, useEffect } from "react";
import{ Button ,Platform,TextInput,Text,PermissionsAndroid,View,StyleSheet,Image,TouchableOpacity} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import{Input} from "@rneui/themed"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
const baseUrl = 'http://172.23.9.43:5000';

import * as ImagePicker from "expo-image-picker"


 function Add() {
    var Item1 ={
        id:1,
        name:"",
        topic:"",
        time:"",
        date:"",
        venue:"",
        detail:"",
        FormData:{}
       
    }
     const [Item,useItem]=useState(Item1);
    const [image, setImage] = useState(null);
    const [photoShow, setPhotoShow] = React.useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    let localUri = result.assets[0].uri;
    // setPhotoShow(localUri);
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append('photo', { uri: localUri, name: filename, type });
    useItem((predata)=>({...predata, FormData:formData}))
    // console.log(formData._parts[0][1])
    await axios.post(`${baseUrl}/api/file-upload` , {
            formdata: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(res => {
            setPhotoShow(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err.response);
        });
   
  };


     let handlechange=(name,value)=>{
       // const {name} = event.target.dataset
       useItem((predata)=>({...predata, [name]:value}))}


    let handleSubmit=(event)=>{
        event.preventDefault();
        event.stopPropagation();
     //console.log(Item)
     axios.post(`${baseUrl}/api/event`, Item).then((response) => {
        console.log(response.data);
      });;
     }
    //  var [event,setevent]=React.useState(Item);
   

return(
    <View style={style.Container}>
        
        <View style={style.BoxInput}>
       
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      
            
    </View>

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
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
       
        </View>
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View> */}
    <Button title="Create Event"
         onPress={handleSubmit}/>
    
    </View>
)}


const style =StyleSheet.create({
    Container:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        padding:1,
        
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
        height:15,
        paddingLeft:10,
        justifyContent: "flex-start",
    },
    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center'
    },
    images: {
      width: 150,
      height: 150,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3
    },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  }
});
export default Add