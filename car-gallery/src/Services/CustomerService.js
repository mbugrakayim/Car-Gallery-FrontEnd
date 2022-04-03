import axios from "axios";

const CUSTOMER_API_URL = "http://localhost:8080/api/v1/customers";

class CustomerService{

    createCustomer(customer){
        return axios.post(CUSTOMER_API_URL,customer);
    }
    login(email , password){
        return axios.post(CUSTOMER_API_URL +"/login" ,{
            email,password
        }).then(res =>{
            if(res.data.accessToken){
                localStorage.setItem("user",JSON.stringify(res.data))
            }
            return res.data;
        })
    }
    logout = () =>{
        
    }


}

export default new CustomerService();