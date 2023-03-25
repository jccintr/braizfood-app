
// --host=192.168.0.107
//const BASE_API = 'localhost:8000/api';
const BASE_API = 'http://192.168.0.107:8000/api';


export default {
   base_storage: 'http://192.168.0.107:8000/storage',
  
  //  base_storage: 'http://177.104.209.216:8000/storage',
  getUser: async (token)=> {
    const response = await fetch(`${BASE_API}/user/${token}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

    });
   return response;
},
  
        

};
