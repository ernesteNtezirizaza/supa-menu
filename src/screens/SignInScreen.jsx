import React from "react";

import {View, StyleSheet} from "react-native";

import { COLORS } from "../constants/colors";

import { Form } from "../components/Form";

export const SignInScreen = () => {
 return(
    <View style={styles.container}>
    <View>
    <Form/>
    </View>
</View>
 )
}

const styles = StyleSheet.create({

   container: {
       backgroundColor: COLORS.ORANGE,
       width: "100%",
       height: "100%",
       paddingTop: 60
   },

})