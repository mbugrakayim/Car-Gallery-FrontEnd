import axios from "axios";

const CAR_API_URL = "http://localhost:8080/api/v1/car";
const CARIMAGE_API_URL = "http://localhost:8080/api/v1/images";

class CarService{
    createCar(car){
        return axios.post(CAR_API_URL , car);
    }
    createCarImage(img){
        return axios.post(CARIMAGE_API_URL , img)
    }

}
export default new CarService();