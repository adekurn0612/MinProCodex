import axios from '../config/endPoint';

//semua data
const getallCat = () => {
    return axios.get('category')
    }  

    const getallSkillType = () => {
        return axios.get('skill-type')
          .then(response => {
            console.log(response.data); // Menampilkan data respons ke konsol
            return response.data; // Mengembalikan data respons
          })
          .catch(error => {
            console.error(error); // Menampilkan error ke konsol
            throw error; // Melemparkan error untuk ditangani di tempat lain
          });
      }
      
const getallSkillTemplete = () => {
            return axios.get('skill-templete')
            } 

export default  {
    getallCat,
    getallSkillType,
    getallSkillTemplete
}