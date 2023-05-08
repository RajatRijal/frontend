import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const baseURL = 'https://swipperresource.azurewebsites.net/api/user'
// const baseURL = 'http://10.0.2.2:5050/api/user'


export function GetAllUsers() {

    return axios.get(baseURL)
        // .then((response) => {
        //     // console.log(response.data)
        //     // return response.data
        // }).catch(error => {
        //     console.log(error.message)
        // })
}

export function AddUser(user) {
    return axios.post(baseURL, user)

}

export function DeleteUsers(userId) {
    console.log(baseURL + '/' + userId)
    // return axios.delete(baseURL + '/' + userId)
}

export function GetUser(userId) {
    return axios.get(baseURL + '/' + userId)
}

export function AuthenticateUser(user) {
    return axios.post('https://swipperresource.azurewebsites.net/api/authenticate', null,{params: { email: user.email, password: user.password}})
}