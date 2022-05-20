import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Text from '../constants/Text';
import Layout from '../constants/Layout';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.getGrayBackground,
    },
    textError:{fontSize:16,color:Colors.errorText},
    padd: {padding: 10},
    contenerMarg:{margin: 20},
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
      height: 40,
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
      backgroundColor: '#ffffff',
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
  horLine:{ 
    height:2,
    backgroundColor:Colors.textGrayColor,
    width:40,
    marginTop:33
  },
  horLineStret:{ 
    height:1.5,
    backgroundColor:Colors.textGrayColor,
    width:370,
  },
  iconStack:{margin:10},
  // contentContainer: {
  //   padding:10
  // },
  padd: {padding: 10},
  contentContainerBox:{
    padding:20
  },
  cartBorder:{
    borderBottomColor:Colors.primeryColor,
    borderBottomWidth:1
  },
  developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginBottom: 20,
      height: 450,
      backgroundColor: Colors.primeryColor
    },
    welcomeImage: {
      width: 150,
      height: 50,
      resizeMode: 'contain',
      marginTop: 20,
      //marginLeft: -10,
    },
   
    getStartedContainer: {
     
    },
    getStartedText: {
      fontSize:Text.textSize,
      color: '#ffffff',
      lineHeight: 24,
      textAlign: 'center',
      padding:50,
    },
    getInputHedText:{
      fontSize:Text.textSize,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        fontWeight:'bold',
    },
    helpLinkText: {
      fontSize:Text.smallText,
      paddingTop:20
    },
  inputContener:{
      marginTop:5,
      marginBottom:5,
      marginLeft:15,
      marginRight:15
  },
    investigationInput:{
      height: 150,
      borderColor: '#808080',
      borderWidth:1,borderRadius: 5,
      //marginTop:20,marginBottom:20,padding:10,
      fontSize:Text.textSize,
    },
    inputBotomColor: {
      height: 40,
      borderBottomWidth:1,
      borderBottomColor: '#c2c2a3',
      marginBottom:10,
      fontSize:Text.textSize,
    },
    inputTextDay: {
      height: 40,
      width:100,
      borderWidth:1,
      borderColor: '#c2c2a3',
      fontSize:Text.textSize,
      textAlign:'center'
    },
    getInputedText: {
      fontSize:Text.textSize,
      color: Colors.textColor,
      paddingTop:10,
     // lineHeight: 24,
    },
    appButtonContainer: {
      height:40,
      elevation: 8,
      backgroundColor: Colors.primeryColor,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom:20,
      alignItems:'center',
      justifyContent: 'center'
    },
    loginButtonContainer: {
      elevation: 8,
      backgroundColor: Colors.primeryColor,
      alignItems:'center',
      justifyContent: 'center',
      height: 50,
      borderColor: '#808080',
      borderWidth:1,
      borderRadius: 5,
      marginTop:20,marginBottom:20,padding:10,
      marginLeft:10,
      fontSize:Text.textSize,

    },
    getButtonText: {
      fontSize:Text.textSize,
        alignItems: 'center',
        color: '#ffffff'
    },
    getOtpMainComponent: {
      flex:1,
      backgroundColor: '#ffffff',
  
  },
  getOtpComponent: {
      margin:20,
      marginTop:20
  },
  getOtpButtonComponent: {
      marginTop:80,
      marginLeft:30,
      marginRight: 30
  },
  getOtpComponentRow: {
      flexDirection: 'row',
      //margin:10,
  },
  getInputHedText:{
    fontSize:Text.textSize,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      fontWeight:'bold',

  },
  getInputText:{
    fontSize:Text.textSize,
      color: '#cfcfcf',
      lineHeight: 24,
      
  },
  getInputTextColor:{
    fontSize:Text.textSize,
      color: '#66c2ff',
      lineHeight: 24,
    
  },
  getParamText:{
    fontSize:Text.textSize,
      lineHeight: 24,
      fontWeight:'bold',

  },
  boxInputOtp: {
      margin:30
  },
  Button: {
     flexDirection: 'row-reverse',
     marginRight:20
  },
  RadioButtonComponentText:{
    fontSize:Text.textSize,
    padding:6
  },
  // RadioButtonComponentTextHed:{
  //   fontSize:Text.textSize,
  //   color: Colors.textColor,
  //   //lineHeight: 24,
  //   marginBottom:5,
  //   paddingTop: 10,
  // },
  ProfileHeaderContener:{
    height:50,
    backgroundColor: Colors.primeryColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding:10
  },
  MainTextAddClinic: {
    fontSize:20,
    lineHeight:40,
    fontWeight: 'bold'
  },
  RegisterBox:{margin:10,height:400,flexWrap: 'wrap',justifyContent:'center',alignItems:'center'},
  RegisterMainContener: {margin:10,borderColor:Colors.primeryColor,borderWidth:1,justifyContent: 'center',alignItems:'center',height:150,width:150},   
  addSessionContener: {flexDirection: 'row',borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#cfcfcf',backgroundColor: '#ffffff'},
  addSessionBox: {backgroundColor: '#f5f5f0',width:60,justifyContent:'center',alignItems:'center'},
  addSessionColorText: {fontSize:Text.textSize,lineHeight:20,textAlign:'center',color: Colors.primeryColor,fontWeight:'500'},
  addSessionTextDay: {      fontSize:Text.textSize    ,lineHeight:20,},
  sessionButton:{
    flex:1,
    borderColor: '#ffcc00',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,
    margin:10,
    
  },
  goDashbordContener: {
    height:270,flexWrap: 'wrap',
  },
  goDashMainContener: {
    margin:10,justifyContent: 'center',
    alignItems:'center',height:100,width:100
  },
  goDashText: {
    fontSize:Text.textSize,
    fontWeight: '400'
  },
  HorLine:{
    height:1,
    backgroundColor:'#cfcfcf',
    marginBottom:20
  },
  texctBigGray:{
    fontSize:20,
    lineHeight:20,
    color:'#ccccb3',
    marginLeft:20
  },
  toGetContener:{
    flex:1,
    backgroundColor:'#f2f2f2',
  },
  toNextGetContener:{flexDirection:'row-reverse',padding:10,backgroundColor:'#fff',},
  centerContent:{
    flex:1,justifyContent:'center',alignItems:'center',
    padding:10,backgroundColor: '#ffffff',
  },
  profileImageStyle:{width: 50,height:50,borderRadius:50,margin:10},
  drNameText:{fontSize:Text.textSize,fontWeight:'500',padding:2.5},
  subTextGrayColor:{ fontSize:Text.textSize,color:'gray',lineHeight:20,padding:2.5},
  subText: {      fontSize:Text.textSize,    fontWeight:'300',lineHeight:20,padding:2.5},
  textContener:{backgroundColor:'#ffffff',marginTop:1,padding:10},
  nextSubContener:{flexDirection:'row',backgroundColor:'#ffffff',paddingTop : 5,paddingBottom:2},
  clinicImageStyle:{width: 50,height:50,margin: 10},
  textSubContener:{flexDirection:'row',backgroundColor:'#ffffff',marginBottom:1,padding:10},
  feedbackContener: {flexDirection:'row',justifyContent:'space-between',marginTop:10,
  marginBottom:10,backgroundColor:'#fff',padding:10},
  feedbackContenerStyle:{backgroundColor:'#f5f5f0',padding:10,marginBottom:1},
  feedbackRowPad:{flexDirection:'row',},
  feedbackJustContenet:{flex:1,justifyContent:'center',alignItems:'center'},
  verticalLine:{width:1,height:30,backgroundColor:'#cfcfcf',marginTop:10,marginBottom:10},
  feedbackTextCentenr: {      fontSize:Text.textSize,fontWeight:'500',textAlign:'center'},
  subTextGrayColorFeedback:{      fontSize:Text.textSize,color:'gray',lineHeight:20,},
  subTextGrayFeedback:{      fontSize:Text.textSize,    padding:3},
  subTextFeedback:{      fontSize:Text.textSize,  },
  scheduleContenerStyle:{backgroundColor:'#fff',marginBottom:1},
  calenderabaox: {marginBottom:1},
  popupModalStyle:{
    height:200,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  checkboxContener:{
    justifyContent:'center',alignItems:'center'
  },
  prescriptionHed:{
    flexDirection:'row-reverse', 
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ededed',
    marginBottom:20
  },
  selectBoxContener:{marginTop:10,marginBottom:10, backgroundColor: '#fff',height: 50,borderColor: '#808080',
  borderWidth:1,borderRadius: 5,},
  thumbnile: { width: 80, height: 80 }
 
});