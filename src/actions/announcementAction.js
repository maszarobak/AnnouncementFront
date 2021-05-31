import { AN_LIST_FAIL, AN_LIST_REQUEST, AN_LIST_SUCCESS , ADD_FAIL, ADD_REQUEST, ADD_SUCCESS} from "../constants/announcementConstants";


import axios from 'axios';
export const listAnnouncement = () => async (dispatch) => {
     dispatch({
         type: AN_LIST_REQUEST
     });
     try  {
        const {data} = await axios.get('/');
        //zmiana stanu redux i update strony z ogloszeniami
        dispatch({
            type: AN_LIST_SUCCESS,
            payload:data
        });
    } 
     catch(error) {
         dispatch({
             type: AN_LIST_FAIL,
             payload:error.message
         })
     }
 }




 export const addAction =(id, uczelnia, wydzial, autor, tytul, opis) => async (dispatch) => {
    dispatch({type:ADD_REQUEST, payload: {id, uczelnia, wydzial, autor, tytul, opis}});
    try {
        const {data}=await axios.post('/', {id, uczelnia, wydzial, autor, tytul, opis});
        dispatch({type: ADD_SUCCESS, payload: data});
       
    }
    catch (error) {
        dispatch({
            type: ADD_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message
            :error.message,
        });
    }
}