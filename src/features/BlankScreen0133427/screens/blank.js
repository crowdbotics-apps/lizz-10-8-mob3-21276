import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3: "",
    TextInput_5: "",
    DateTimePicker_7: new Date("10/08/2020"),
    TextInput_9: "",
    Switch_10: true,
    CheckBox_11: true,
    CheckBox_12: true
  }

  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_7}
        date={this.state.DateTimePicker_7}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_7: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <Switch
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_10}
        value={this.state.Switch_10}
        onValueChange={nextChecked => this.setState({ Switch_10: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        disabled={false}
        containerStyle={styles.CheckBox_11}
        checked={this.state.CheckBox_11}
        onPress={nextChecked => this.setState({ CheckBox_11: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        disabled={false}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_12}
        checked={this.state.CheckBox_12}
        onPress={nextChecked => this.setState({ CheckBox_12: nextChecked })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
