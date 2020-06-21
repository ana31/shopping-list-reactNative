import React from 'react';

import {Alert, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const createAlert = (text, onPress) =>
  Alert.alert(
    '',
    text,
    [
      {text: 'Yes', onPress},
      {
        text: 'No',
        onPress: () => console.log('No button clicked'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );

const Footer = ({
  setList,
  setCheckedList,
  disableClearChecked,
  disableClearList,
  clearCheckedList,
}) => {
  const clearItemList = () =>
    createAlert('Are you sure you want to clear the list?', () => {
      setList([]);
      setCheckedList([]);
    });

  const clearChekedList = () =>
    createAlert('Are you sure you want to clear the checked list?', () => {
      clearCheckedList();
      setCheckedList([]);
    });

  return (
    <View style={styles.footer}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={disableClearList ? styles.disableButton : styles.deleteButton}
          onPress={clearItemList}
          disabled={disableClearList}>
          <Text style={styles.buttonText}>Clear list</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            disableClearChecked ? styles.disableButton : styles.deleteButton
          }
          onPress={clearChekedList}
          disabled={disableClearChecked}>
          <Text style={styles.buttonText}>Clear checked</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    flexDirection: 'row',
    width: '45%',
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  buttonText: {
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  disableButton: {
    flexDirection: 'row',
    width: '45%',
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#ff7d7d',
    borderRadius: 5,
  },
});

export {Footer};
