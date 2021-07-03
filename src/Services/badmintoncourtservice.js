import axios from "axios";
const PLAYER_API_URL="http://localhost:8080/api/badminton";

class badmintoncourtservice{
   
getcourt(){
    return axios.get(PLAYER_API_URL);
   
}
courtbook(data){
    return axios.post(PLAYER_API_URL, data);
}


}
export default new badmintoncourtservice()