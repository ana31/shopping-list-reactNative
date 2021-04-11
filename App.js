import React, {useState, Fragment, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  AppRegistry,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {List} from './src/List';
import {Footer} from './src/Footer';

const App = () => {
  const [value, changeInputText] = useState('');
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('shoppingList')
      .then((listFromStore) => {
        if (JSON.parse(listFromStore)) {
          setList(JSON.parse(listFromStore));
        } else {
          setList([]);
        }
      })
      .done();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('shoppingList', JSON.stringify(list), (err) => {
      console.log(err);
    });
  }, [list]);

  const onChangeCheck = (index, isChecked) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList[index].checked = !isChecked;
    setList(newList);
    setCheckedList(newList.filter((item) => item.checked));
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.page}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => changeInputText(text)}
          onSubmitEditing={() => {
            setList([...list, {text: value, checked: false}]);
            changeInputText('');
          }}
          value={value}
          placeholder="Add item"
        />
        <ScrollView style={styles.tasks} persistentScrollbar>
          <List list={list} onChange={onChangeCheck} />
        </ScrollView>
        <Footer
          setCheckedList={setCheckedList}
          setList={setList}
          disableClearChecked={!checkedList.length}
          disableClearList={!list.length}
          clearCheckedList={() => setList(list.filter((item) => !item.checked))}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#81c784',
  },
  tasks: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#81c784',
  },
  textInput: {
    paddingLeft: 20,
    color: '#e8f5e9',
    backgroundColor: '#43a047',
    fontSize: 24,
  },
});

AppRegistry.registerComponent('shoppingList', () => App);

export default App;
