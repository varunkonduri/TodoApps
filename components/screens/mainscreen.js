import React, {useState,useEffect} from'react';
import {Text} from 'react-native';
import {Appbar,TextInput,Button} from 'react-native-paper';
//import { useState } from 'react';
import firebase from '../../fb';
import {YellowBox} from 'react-native';
import _ from 'lodash';
import {LogBox} from 'react-native';


function Todo(){
    const[task,setTask]=useState('')
    const[describe,setDescribe]=useState('')
    const db = firebase.database().ref()


    useEffect(()=>{
        return db.on('value',(snapshot)=>{
           const list =[]
            snapshot.forEach(doc => {
                list.push({doc})
                console.log(list)
            })
            
        })
    })
    function addTask(){
        //send to firebase
        db.push({
            title:task,
            description:describe,
            complete:false
        })
        setTask('')
        setDescribe('')
    }
    return(<>
            <Appbar>
                <Appbar.Content title={"My App"}/>
            </Appbar>
            <TextInput label={"New Task"} value={task} onChangeText={setTask}/>
            <TextInput label={"Describe"} value={describe} onChangeText={setDescribe}/>
            
            <Button onPress={()=>{addTask()}}>Add Task</Button>
            </>
         )
}

export default Todo;
