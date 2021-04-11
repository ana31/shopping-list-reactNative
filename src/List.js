import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/AntDesign';
const List = ({list, onChange, onDelete, onTextChange}) => {
  return (
    <View>
      {list.map((item, index) => (
        <View style={styles.row}>
          <CheckBox
            style={styles.listItem}
            checkBoxColor={'#263238'}
            key={index}
            isChecked={item.checked}
            onClick={() => onChange(index, item.checked)}
          />
          <TextInput
            style={item.checked ? styles.checkedText : styles.uncheckedText}
            onChangeText={(text) => onTextChange(index, text)}
            multiline={true}>
            {item.text}
          </TextInput>
          <Icon.Button
            style={styles.delete}
            name="delete"
            size={30}
            color="#900"
            backgroundColor="transparent"
            light
            onPress={() => onDelete(index)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkedText: {
    textDecorationLine: 'line-through',
    fontSize: 20,
    color: '#263238',
    textAlign: 'left',
    flex: 1,
    flexWrap: 'wrap',
  },
  uncheckedText: {
    fontSize: 20,
    color: '#263238',
    textAlign: 'left',
    flex: 1,
    flexWrap: 'wrap',
  },
  listItem: {
    paddingTop: 15,
    height: 'auto',
    width: 40,
  },
  row: {
    flex: 1,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  delete: {
    height: 40,
    width: 40,
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    flex: 1,
  },
});

export {List};
