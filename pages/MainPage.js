import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
import data from '../data.json';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';
export default function MainPage() {
  
  const [state,setState] = useState([]);
  const [cateState,setCateState] = useState([]);
  const [ready,setReady] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setState(data.tip);
        setCateState(data.tip);
        setReady(false);
    },1000);
  },[])

  const category = (cate) => {
    if(cate == "전체보기"){
        setCateState(state);
    }else{
        setCateState(state.filter((d)=>{
            return d.category == cate;
        }))
    }
  }

  let todayWeather = 11;// API 연결 전
  let todayCondition = "맑음" // API 연결 전
  return ready ? <Loading/> :  (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>현지 생활 정보</Text>
			 <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image style={styles.mainImage} source={{uri:main}}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
      <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('category1')}}><Text style={styles.middleButtonText}>category1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('category2')}}><Text style={styles.middleButtonText}>category2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('category3')}}><Text style={styles.middleButtonText}>category3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={()=>{category('category4')}}><Text style={styles.middleButtonText}>category4</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
         {
            cateState.map((content,i)=>{
              return (<Card content={content} key={i}/>)
            })
          }
        
      </View>
   
    </ScrollView>)
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop:50,
    marginLeft:20
  },
weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    width:'90%',
    height:200,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"
  },
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  middleButtonAll: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#20b2aa",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
});