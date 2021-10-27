import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Text from '../constants/Text';
import Layout from '../constants/Layout';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.getGrayBackground,
    },
    backgroundColor: {
      backgroundColor:Colors.getGrayBackground,
  },
    padd: {padding: 10},
    contenerMarg:{margin: 20},
    marg: {marginTop:10,marginBottom:5},
    contenerMargOver:{flex:1,justifyContent:'center'},
    secvenceShow: {flexDirection:'row'},
    spaceBetween: {flex:1,justifyContent:'space-between'},
    centerContener: {
      justifyContent:'center',
      alignItems:'center',
    },
    headingText: {
      fontSize:Text.headingTextSize,
      color:Colors.primeryColor,
      lineHeight:Text.lineHeight,
    },
    textContenerMarg:{
      marginTop:60,
      marginBottom:30
    },
    boxCenter:{
     // flex:1,
     //width:Layout.window.width,
      width:150,
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#ededed',
    },
    loginImage:{
      width:80,height:100,
      marginBottom:20
    },
    text:{
      fontSize:Text.textSize,
      fontWeight:'500'
    },
    iconContener:{
      flex:1,
      justifyContent:'flex-end',
      flexDirection:'column-reverse',
      padding:5,borderRadius:30,
      position:'absolute',
    backgroundColor:Colors.primeryColor
    },
    messageContentText:{
      fontSize:Text.textSize,
      color:Colors.textColor,
      textAlign:'center',
      lineHeight:Text.lineHeight
    },
    messageContentTextColor:{
      fontSize:Text.textSize,
      color:Colors.primeryColor,
      textAlign:'center',
      lineHeight:Text.lineHeight,
      fontWeight:'500'
    },
    input: {
      flex:1,
      height: 50,
      fontSize: Text.textSize
    },
    loginContener: {
      justifyContent:'space-between',
      //marginTop:20,marginBottom:20,
    },
    loginButtonContainer: {
      elevation: 8,
      backgroundColor: Colors.primeryColor,
      alignItems:'center',
      justifyContent: 'center',
      //height: 40,
      borderColor: '#808080',
      borderWidth:1,
      borderRadius: 5,
      paddingTop:10,paddingLeft:25,paddingRight:25,paddingBottom:10,marginTop:20,marginBottom:20,
      fontSize: Text.textSize
    },
    appointButtonContainer: {
      elevation: 8,
      backgroundColor: Colors.primeryColor,
      alignItems:'center',
      justifyContent: 'center',
      borderColor: Colors.primeryColor,
      borderWidth:1,
      borderRadius: 5,
      padding:10,
      marginTop:5,
      marginBottom:5,
      fontSize: Text.textSize
    },
    getButtonText: {
        fontSize:Text.textSize,
        alignItems: 'center',
        color: '#ffffff',
        fontWeight:'500'
    },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: 50,
      borderColor: '#808080',
      borderWidth:1,borderRadius: 5,
      marginTop:10,marginBottom:10,padding:10,
      fontSize: Text.textSize
  },  
  inputIconStyle: {
     paddingLeft:10,paddingRight:10
  },
  forgoteText:{borderLeftColor:Colors.primeryColor,borderLeftWidth:1},
  whiteTextBody:{
    fontSize:Text.textSize,
    color: '#ffffff',
  },
  cartContener:{
    borderColor:'red',
    borderWidth:StyleSheet.hairlineWidth,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     padding:10
  },
  horLine:{ 
    height:2,
    backgroundColor:Colors.textGrayColor,
    width:40,
    marginTop:33
  },
  horLineStret:{ 
    height:1.5,
    backgroundColor:Colors.textGrayColor,
    width:'100%',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    //borderBottomWidth: 0,
    borderColor: Colors.textGrayColor,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 10,
    marginTop:20,
    marginBottom:20
  },
  smallText:{
    fontSize: Text.smallText,
    lineHeight:Text.lineHeight,
    textAlign:'center'
  },
  appointmentCard: {
    borderRadius: 10,
    borderColor: Colors.textGrayColor,
    backgroundColor: '#ffffff',
    borderWidth:1,
    marginBottom: 10,
},
ImageCart : {
    height: 140,
    width:"100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
},
appointmentSecondCart:{
  padding:5, shadowColor: 'black',borderColor:'#d2d2d2',borderWidth:2, 
  marginBottom: 20,
},
TextBold: {
 fontWeight: 'bold',
  fontSize: Text.textSize,
  lineHeight:Text.lineHeight,
  paddingBottom:5,
},
TextBoldCenter: {
  fontWeight: 'bold',
   fontSize: Text.textSize,
   lineHeight:Text.lineHeight,
   textAlign:'center',
   paddingBottom:5,
 },
textGray:{
  color: Text.textGrayColor,
  fontSize: Text.smallText,
  
},
ImageCartSmall:{
  height:50,width:50
},

headingText:{
  fontSize:Text.headingTextSize,
  fontWeight:'500'
},
doctorListContener:{
  marginTop:15,marginBottom:30,marginLeft:2,marginRight:2, 
  flex:1,justifyContent:'center',alignItems:'center'
},
bookImage:{
  height:90,width:90,borderRadius:60
},
smallImage:{
  height:50,width:50,borderRadius:40
},
hTextBookAppo:{
  fontSize:Text.textSize,fontWeight:'bold',lineHeight:Text.lineHeight
},
//textBookAppo:{fontSize:Text.textSize,lineHeight:Text.lineHeight},
textBookAppoLign:{fontSize:Text.textSize,fontWeight:'bold',lineHeight:40},
headerBookAppo:{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#cce0ff',},
//textn:{fontSize:Text.textSize,fontWeight:'bold',lineHeight:Text.lineHeight},
textColorContact:{color:'#2eb8b8',fontWeight:'bold',fontSize:Text.textSize,},
//textLignHeight:{fontSize:Text.textSize,color:'green',lineHeight:Text.lineHeight,marginLeft:3},
sloteContener:{backgroundColor:'#3385ff',borderRadius:5,padding:10,marginTop:10,marginBottom:10,marginLeft:5,marginRight:5},
sloteContenerWhite:{
  borderWidth:1.5,
  borderColor:Colors. textGrayColor,
  borderRadius:5,
  paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,
  marginTop:5,marginBottom:5,marginLeft:5,marginRight:5,
  justifyContent:'center',alignItems:'center',
  backgroundColor:Colors.whiteBackground,
},

//primaryTextColor:{fontSize:Text.textSize,textAlign:'center',color:Colors.primeryColor,fontWeight:'bold'},
lignText:{fontSize:Text.textSize,color:'#dfdfdf',lineHeight:40},
normalText:{fontSize:Text.textSize,lineHeight:40,fontWeight:'700'},
personalContener:{
  backgroundColor:Colors.whiteBackground,
  justifyContent:'space-between',
  alignItems:'center',
  padding:10,
  marginTop:20,
  marginBottom:10
},
personalContenerSecond:{
  backgroundColor:Colors.whiteBackground,
  padding:10,
  marginTop:10,
  marginBottom:10
},
medicalContener:{
  backgroundColor:Colors.whiteBackground,
  justifyContent:'space-between',
  alignItems:'center',
  padding:10,
},
nextSubContener:{flexDirection:'row',backgroundColor:'#ffffff',paddingTop : 5,paddingBottom:2},
clinicImageStyle:{width: 50,height:50,margin: 10},
textSubContener:{flexDirection:'row',backgroundColor:'#ffffff',marginBottom:1,padding:10},
paddMarg:{paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10},
});