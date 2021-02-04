import Axios from "axios";

export const setDataBlog = () => (dispatch) => {
    Axios.get('http://127.0.0.1:4000/v1/blog/posts?page=1&perPage=4')
    .then(result => {
        const responeAPI = result.data;

        dispatch({type: 'UPDATE_DATA_BLOG', payload: responeAPI.data})
    })
    .catch(err => {
        console.log('error:', err);
    })
}

// export const setDataBlog = () => {

//     return (dispatch) => {
//         Axios.get('http://127.0.0.1:4000/v1/blog/posts?page=1&perPage=4')
//         .then(result => {
//             const responeAPI = result.data;

//             dispatch({type: 'UPDATE_DATA_BLOG', payload: responeAPI.data})
//         })
//         .catch(err => {
//             console.log('error:', err);
//         })
//     }
// }