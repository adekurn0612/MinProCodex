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
    // console.log('DATA API',data)
    return axios.patch(`category/${data.cate_id}`,data )
  }

  const createCat=(data : any)=>{
    console.log(data)
    return axios.post(`category`, data)
  }
  const delCat=(id: any)=>{
    console.log(id)
    return axios.delete(`category/${id}`)
  }

  const createSkillType=(data : any)=>{
    console.log('api',data)
    return axios.post(`skill-type`, data)
  }

  const delSkillType =(data : any)=>{
    console.log('del' , data)
    return axios.delete(`skill-type/${data.skty_name}`)
  }

  const updateSkillType = (data : any)=>{
    console.log(data)
    return axios.patch(`skill-type/${data.skty_name}`,data)
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
    createCat,
    createSkillType,
    delSkillType,
    updateSkillType
}