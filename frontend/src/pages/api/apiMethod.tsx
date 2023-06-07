import axios from '../config/endPoint';

//semua data
const getallCat = () => {
    return axios.get('category')
    }  

    const getallSkillType = () => {
        return axios.get('skill-type')
          .then((response: { data: any; }) => {
            console.log(response.data); // Menampilkan data respons ke konsol
            return response.data; // Mengembalikan data respons
          })
          .catch((error: any) => {
            console.error(error); // Menampilkan error ke konsol
            throw error; // Melemparkan error untuk ditangani di tempat lain
          });
      }
  const updateCat=(data : any)=>{
    return axios.put(`category/${data.id}`,data )
  }

  const createCat=(data : any)=>{
    console.log(data)
    return axios.post(`category`, data)
  }
  const delCat=(id: any)=>{
    console.log(id)
    return axios.delete(`category/${id}`)
  }
      
const getallSkillTemplete = () => {
            return axios.get('skill-templete')
            } 

export default  {
    delCat,
    getallCat,
    getallSkillType,
    getallSkillTemplete,
    updateCat,
    createCat
}