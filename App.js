import React , { useState } from "react";
import { Dimensions , Button , Modal , Text , StyleSheet , TextInput , View , TouchableOpacity , Keyboard , Pressable , TouchableWithoutFeedback } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity : 0.5 };

const AppButton1 = ({onPress , title}) => {
  return(
  <TouchableOpacity 
  onPress = {onPress}
  style = {styles.AppButtonStyleContainer1}>
    <Text style = {styles.AppButtonText}> {title} </Text>
  </TouchableOpacity>
  );
};

const AppButton2 = ({onPress , title}) => {
  return(
  <TouchableOpacity 
  onPress = {onPress}
  style = {styles.AppButtonStyleContainer2}>
    <Text style = {styles.AppButtonText}> {title} </Text>
  </TouchableOpacity>
  );
};

const AppButton3 = ({onPress , title}) => {
  return(
  <TouchableOpacity 
  onPress = {onPress}
  style = {styles.AppButtonStyleContainer3}>
    <Text style = {styles.AppButtonText}> {title} </Text>
  </TouchableOpacity>
  );
};

const MainApp = () => {

  const [stringPlaceHolder1 , changePlaceHolder1] = useState("Net Price");
  const change1 = placeholder => {
    changePlaceHolder1("")
  };

  const [stringPlaceHolder2 , changePlaceHolder2] = useState("GST (in %)");
  const change2 = placeholder => {
    changePlaceHolder2("")
  };

  const [stringPlaceHolder3 , changePlaceHolder3] = useState("Cost of Production");
  const change3 = placeholder => {
    changePlaceHolder3("")
  };

  const [stringPlaceHolder4 , changePlaceHolder4] = useState("Profit Ratio (in %)");
  const change4 = placeholder => {
    changePlaceHolder4("")
  };

  const [stringPlaceHolder5 , changePlaceHolder5] = useState("GST (in %)");
  const change5 = placeholder => {
    changePlaceHolder5("")
  };

  const [stringPlaceHolder6 , changePlaceHolder6] = useState("Cost of goods");
  const change6 = placeholder => {
    changePlaceHolder6("")
  };
  
  const [stringPlaceHolder7 , changePlaceHolder7] = useState("Profit Ratio (in %)");
  const change7 = placeholder => {
    changePlaceHolder7("")
  };
  const [stringPlaceHolder8 , changePlaceHolder8] = useState("GST (in %)");
  const change8 = placeholder => {
    changePlaceHolder8("")
  };
  
  const [resultModal , setResultModal] = useState(false);
  const [resultModal2 , setResultModal2] = useState(false);
  const [resultModal3 , setResultModal3] = useState(false);
  
  const [modalOpen1 , setModalOpen1] = useState(false);
  const [modalOpen2 , setModalOpen2] = useState(false);
  const [modalOpen3 , setModalOpen3] = useState(false);

  const [enteredValue1 , setEnteredValue1] = useState("");
  const numberInputHandler1 = inputText => {
    setEnteredValue1(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue2 , setEnteredValue2] = useState("");
  const numberInputHandler2 = inputText => {
    setEnteredValue2(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue3 , setEnteredValue3] = useState("");
  const numberInputHandler3 = inputText => {
    setEnteredValue3(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue4 , setEnteredValue4] = useState("");
  const numberInputHandler4 = inputText => {
    setEnteredValue4(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue5 , setEnteredValue5] = useState("");
  const numberInputHandler5 = inputText => {
    setEnteredValue5(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue6 , setEnteredValue6] = useState("");
  const numberInputHandler6 = inputText => {
    setEnteredValue6(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue7 , setEnteredValue7] = useState("");
  const numberInputHandler7 = inputText => {
    setEnteredValue7(inputText.replace(/[^0-9.]/g , ''))
  };

  const [enteredValue8 , setEnteredValue8] = useState("");
  const numberInputHandler8 = inputText => {
    setEnteredValue8(inputText.replace(/[^0-9.]/g , ''))
  };
  
  var EN1 = parseFloat(enteredValue1);
  var EN2 = parseFloat(enteredValue2);
  var gstResult = ((EN1 * EN2) / 100);
  var grossPrice = (EN1 + gstResult);
  var cgst_igst = (gstResult / 2); 

  var COP = parseFloat(enteredValue3);
  var ProfitRatio = parseFloat(enteredValue4);
  var Gstper = parseFloat(enteredValue5);
  var TPC = (COP + ((COP * ProfitRatio) / 100));
  var gst = ((TPC * Gstper) / 100); 
  var cgst_igst_M = (gst / 2);

  var OriginalCostOfGoods = parseFloat(enteredValue6);
  var ProfitRatio1 = parseFloat(enteredValue7); 
  var Gstper1 = parseFloat(enteredValue8);
  var TPC1 = ( OriginalCostOfGoods + ((OriginalCostOfGoods * ProfitRatio1) / 100 ));
  var gst1 = (( TPC1 * Gstper1) / 100 );
  var cgst_igst_W = ( gst1 / 2 );

  return (
    <View style = {styles.basic}>
      <View style = {styles.outerComp}>
        <Text style = {styles.textstylesheadings}> GST Calculator </Text>
        <Text style = {styles.textnormal}> Select any one </Text>
      </View>

      <View>
        <Modal visible={modalOpen1} animationType = "fade">
          <View style = {{flex : 0.10 , alignSelf : "center" , width : "100%" , backgroundColor : "sandybrown" , justifyContent : "center" , alignItems : "center"}}>
            <Text style = {{color : "white" , fontSize : 25 , fontWeight : "bold" }} > BUYER </Text> 
          </View>
          <View style = {styles.textInpContainer}>
            <TouchableWithoutFeedback onPress = {() => { Keyboard.dismiss(); }}>
              <View style = {{flex : 1}}>
                <TextInput onKeyPress = {() => {change1}} value = {enteredValue1} onChangeText = {numberInputHandler1} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder1} placeholderTextColor = "white"/>
                <TextInput onKeyPress = {() => {change2}} value = {enteredValue2} onChangeText = {numberInputHandler2} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder2} placeholderTextColor = "white"/>
              </View>
            </TouchableWithoutFeedback>
            <View style = {{flex : 0.30 , alignSelf : "stretch"  , justifyContent : "flex-end" , padding : "1.5%"}} >
              <View style = {{margin : "5%" , elevation : 15 }}> 
                <Button color = "tomato" title = "View Result" onPress = {() => setResultModal(true)}/>
              </View>
              <View style = {{margin : "5%" , elevation : 15 }}>
                <Button color = "tomato" title = "Back" onPress = {() => {setModalOpen1(false) ; setEnteredValue1('') ; setEnteredValue2('');}}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    
      <View>
        <Modal visible={modalOpen2} animationType = "fade">
          <View style = {{flex : 0.10 , alignSelf : "center" , width : "100%" , backgroundColor : "sandybrown" , justifyContent : "center" , alignItems : "center"}}>
            <Text style = {{color : "white" , fontSize : 25 , fontWeight : "bold" }} > MANUFACTURER </Text> 
          </View>
          <View style = {styles.textInpContainer}>
            <TouchableWithoutFeedback onPress = {() => { Keyboard.dismiss(); }}>
                <View style = {{flex : 1}}>
                  <TextInput onKeyPress = {() => {change3}} value = {enteredValue3} onChangeText = {numberInputHandler3} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder3} placeholderTextColor = "white"/>
                  <TextInput onKeyPress = {() => {change4}} value = {enteredValue4} onChangeText = {numberInputHandler4} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder4} placeholderTextColor = "white"/>
                  <TextInput onKeyPress = {() => {change5}} value = {enteredValue5} onChangeText = {numberInputHandler5} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder5} placeholderTextColor = "white"/>
                </View>
              </TouchableWithoutFeedback>
              <View style = {{flex: 0.30 , alignSelf : "stretch"  , justifyContent : "flex-end" , padding : "1.5%"}} >
                <View style = {{margin : "5%" , elevation : 15 }}> 
                  <Button color = "tomato" title = "View Result" onPress = {() => setResultModal2(true)}/>
                </View>
                <View style = {{margin : "5%" , elevation : 15 }}>
                  <Button color = "tomato" title = "Back" onPress = {() => {setModalOpen2(false); setEnteredValue3('') ; setEnteredValue4(''); setEnteredValue5('');}}/>
                </View>
              </View>
          </View>
        </Modal>
      </View>

      <View >
        <Modal visible={modalOpen3} animationType = "fade">
          <View style = {{flex : 0.10 , alignSelf : "center" , width : "100%" , backgroundColor : "sandybrown" , justifyContent : "center" , alignItems : "center"}}>
            <Text style = {{color : "white" , fontSize : 25 , fontWeight : "bold" }} > RETAILER/WHOLESALER </Text> 
          </View>
          <View style = {styles.textInpContainer}>
            <TouchableWithoutFeedback onPress = {() => { Keyboard.dismiss(); }}>
              <View style = {{flex : 1}}>
                <TextInput onKeyPress = {() => {change6}} value = {enteredValue6} onChangeText = {numberInputHandler6} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder6} placeholderTextColor = "white"/>
                <TextInput onKeyPress = {() => {change7}} value = {enteredValue7} onChangeText = {numberInputHandler7} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder7} placeholderTextColor = "white"/>
                <TextInput onKeyPress = {() => {change8}} value = {enteredValue8} onChangeText = {numberInputHandler8} keyboardType = "number-pad" style = {styles.textInp} placeholder = {stringPlaceHolder8} placeholderTextColor = "white"/>
              </View>
            </TouchableWithoutFeedback>
            <View style = {{flex: 0.30 , alignSelf : "stretch"  , justifyContent : "flex-end" , padding : "1.5%"}} >
              <View style = {{margin : "5%" , elevation : 15 }}> 
                <Button color = "tomato" title = "View Result" onPress = {() => {setResultModal3(true)}}/>
              </View>
              <View style = {{margin : "5%" , elevation : 15 }}>
                <Button color = "tomato" title = "Back" onPress = {() => {setModalOpen3(false) ; setEnteredValue6('') ; setEnteredValue7(''); setEnteredValue8('');}}/>
              </View>
            </View>
          </View>
        </Modal>  
      </View>

      <View >
        <Modal visible={resultModal} animationType = "fade">
          <View style = {{flex : 0.1 , alignSelf : "center" , width : "100%" , backgroundColor : "sandybrown" , justifyContent : "center" , alignItems : "center"}}>
            <Text style = {{color : "white" , fontSize : 25 , fontWeight : "bold" }} > RESULTS </Text> 
          </View>
          <View style = {styles.textInpContainer}>
            <View style = {styles.TextResultContainer}>
              <Text style = {styles.TextResult}> Gross Price : {grossPrice} </Text>
              <Text style = {styles.TextResult}> CGST : {cgst_igst} </Text>
              <Text style = {styles.TextResult}> IGST : {cgst_igst} </Text>
              <Text style = {styles.TextResult}> Total Tax : {gstResult} </Text>
            </View>
            <View style = {{flex: 0.5 , alignSelf : "stretch"  , justifyContent : "flex-end" , padding : "1.5%"}} >
              <View style = {{margin : "5%" , elevation : 15}}>
                <Button color = "tomato" title = "Back" onPress = {() => setResultModal(false)}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View >
        <Modal visible={resultModal2} animationType = "fade">
          <View style = {{flex : 0.1 , alignSelf : "center" , width : "100%" , backgroundColor : "sandybrown" , justifyContent : "center" , alignItems : "center"}}>
            <Text style = {{color : "white" , fontSize : 25 , fontWeight : "bold" }} > RESULTS </Text> 
          </View>
          <View style = {styles.textInpContainer}>
            <View style = {styles.TextResultContainer}>
              <Text style = {styles.TextResult}> Total Production Cost : {TPC} </Text>
              <Text style = {styles.TextResult}> CGST : {cgst_igst_M} </Text>
              <Text style = {styles.TextResult}> IGST : {cgst_igst_M} </Text>
              <Text style = {styles.TextResult}> Total Tax : {gst} </Text>
            </View>
            <View style = {{flex: 0.5 , alignSelf : "stretch"  , justifyContent : "flex-end" , padding : "1.5%"}} >
              <View style = {{margin : "5%" , elevation : 15}}>
                <Button color = "tomato" title = "Back" onPress = {() => setResultModal2(false) }/>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View >
        <Modal visible={resultModal3} animationType = "fade">
          <View style = {{flex : 0.1 , alignSelf : "center" , width : "100%" , backgroundColor : "sandybrown" , justifyContent : "center" , alignItems : "center"}}>
            <Text style = {{color : "white" , fontSize : 25 , fontWeight : "bold" }} > RESULTS </Text> 
          </View>
          <View style = {styles.textInpContainer}>
            <View style = {styles.TextResultContainer}>
              <Text style = {styles.TextResult}> Total Production Cost : {TPC1} </Text>
              <Text style = {styles.TextResult}> CGST : {cgst_igst_W} </Text>
              <Text style = {styles.TextResult}> IGST : {cgst_igst_W} </Text>
              <Text style = {styles.TextResult}> Total Tax : {gst1} </Text>
            </View>
            <View style = {{flex: 0.5 , alignSelf : "stretch"  , justifyContent : "flex-end" , padding : "1.5%"}} >
              <View style = {{margin : "5%" , elevation : 15}}>
                <Button color = "tomato" title = "Back" onPress = {() => setResultModal3(false)}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style = {styles.CustomButtonScreenContainer}>
        <AppButton1 size = "sm" title = "Buyer" style = {styles.AppButtonStyleContainer1} onPress = {() => setModalOpen1(true)} />
        <AppButton2 size = "sm" title = "Manufacturer" style = {styles.AppButtonStyleContainer2} onPress = {() => setModalOpen2(true)} />
        <AppButton3 size = "sm" title = "Retailer/Wholesaler" style = {styles.AppButtonStyleContainer3} onPress = {() => setModalOpen3(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basic : {
    backgroundColor : 'sandybrown',
    justifyContent : "space-evenly",
    flex : 1
  },
  textInpContainer : {
    flex : 1,
    backgroundColor : "sandybrown"
  },
  textInp : {
    flex : 1,
    margin : "10%",
    color : "white",
    textAlign : "center",
    fontSize : 15,
    borderRadius : 25,
    backgroundColor : "tomato",
    elevation : 15,
    borderColor : "orangered",
    borderWidth : 2
  },
  outerComp : {
    flex : 1,
    width : "100%",
    height : "100%",
    margin : "8%", 
    flexDirection : "column",
    justifyContent : "space-between",
    textAlign : "center",
    alignSelf : "center"
  },
  textstylesheadings : {
    flex : 0.5,
    width : "100%",
    color : 'ghostwhite',
    fontWeight : 'bold',
    fontSize : 40, 
    textAlign : 'center',
    justifyContent : "center",
    padding : "3%"
  },
  textnormal : {
    flex : 0.5,
    color : 'snow',
    fontWeight : 'bold',
    fontSize : 17,
    margin : "5%",
    paddingTop : "1%",
    paddingBottom : "1%",
    textAlignVertical : "bottom",
    textAlign : "center",
    justifyContent : "center"
  },
  AppButtonStyleContainer1 : {
    flex : 0.5,
    elevation : 10,
    backgroundColor : 'tomato',
    borderRadius : 25, 
    margin : "3%"
  },
  AppButtonStyleContainer2 : {
    flex : 0.5,
    elevation : 10,
    backgroundColor : 'tomato',
    borderRadius : 25,
    margin : "3%"
  },
  AppButtonStyleContainer3 : {
    flex : 0.5,
    elevation : 10,
    backgroundColor : 'tomato',
    borderRadius : 25,
    margin : "3%"
  },
  AppButtonText : {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign : "center",
    textAlignVertical : "center",
    textTransform: "uppercase",
    padding : "2%"
  },
  CustomButtonScreenContainer : {
    flex : 2,
    padding : "3.5%"
  },
  TextResultContainer : {
    flex : 1,
    padding : "10%",
    justifyContent : "space-between",
    alignItems : "center"
  },
  TextResult : {
    flex : 0.25,
    color : "white",
    fontSize : 24,
    fontWeight : "bold"
  }
});

export default MainApp;
  