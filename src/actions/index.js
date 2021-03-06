import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c918_demouser';

export function addToDoItem(item){
    const resp = axios.post(BASE_URL + API_KEY, item);

    return {
        type: types.ADD_LIST_ITEM,
        payload: resp
    }
}

export async function getListData(){

    const resp = await axios.get(BASE_URL + API_KEY);

    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp,
    }
}