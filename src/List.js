import React from 'react';
import {View, StyleSheet} from 'react-native';
import CheckBox from 'react-native-check-box';

const List = ({list, onChange}) => {
  return (
    <View>
      {list.map((item, index) => (
        <CheckBox
          style={styles.listItem}
          rightTextStyle={
            item.checked ? styles.checkedText : styles.uncheckedText
          }
          key={index}
          rightText={item.text}
          isChecked={item.checked}
          onClick={() => onChange(index, item.checked)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkedText: {
    textDecorationLine: 'line-through',
    fontSize: 20,
  },
  uncheckedText: {
    fontSize: 20,
  },
  listItem: {
    paddingTop: 15,
  },
});
export {List};
