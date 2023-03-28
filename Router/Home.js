import React,{useEffect, useState} from "react";
import { ActivityIndicator,FlatList,RefreshControl,Image,StyleSheet,ScrollView,Text,View,SafeAreaView } from "react-native";
import img from "../Public/img.js";
// import ItemData from "./Item.js";
import axios from 'axios';
const baseUrl = 'http://172.23.9.43:5000';

 
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
   

  




 Home=()=>{
    const [refreshing, setRefreshing] = useState(true);
    const [ItemData,setItemData]=useState([])
    useEffect(()=>{
        setRefreshing(true);
       LoadItem();
    },[])
    
    const LoadItem=()=>{
        axios.get(`${baseUrl}/api/event`).then(
            (Response)=>{
                // console.log(Response.data)
                setItemData((old)=>{return Response.data})
                setRefreshing(false);
            })
    }
    const ItemView=(t)=>{
        let item=t.item
        console.log(item)
      return(
        
        <View style={styles2.event} key={t.index}>
                     <Text>{item.S_no}: Hello {item.name}</Text>
                     <View>{item.FormData._parts[0][1].uri&&
                     <Image source={{uri:item.FormData._parts[0][1].uri}} style={{width:200,height:100}}/>}
                         <Text>{item.topic}</Text>
                        
                         <Text>Time:{item.time}| Date:{item.date} </Text>
                         <Text>Venue: {item.venue}</Text>
                         <Text>About:{item.venue}</Text>
                     </View>
                     </View>
      )
    }
    
    const ItemSeparatorView = () => {
        return (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };

       return(
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.container}>
             
               <View>
               {refreshing ? <ActivityIndicator /> : null}
           <FlatList
                data={ItemData}
               keyExtractor={(item, index) => index.toString()}
               ItemSeparatorComponent={ItemSeparatorView}
                 enableEmptySections={true}
                 renderItem={ItemView}
                  refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={LoadItem} />
               }
             />
             
             </View>

             
               <Text>Nice to meet you</Text>
               
               </View>
               </SafeAreaView>

       )
   
}
const styles =StyleSheet.create({
container:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
}
})
// let r=new Home; 
export default Home
