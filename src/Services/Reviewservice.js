import axios from "axios";
const PLAYER_API_URL="http://localhost:8080/api/review";

class Reviewservice{
   
getreview(){
    return axios.get(PLAYER_API_URL);
   
}
createreview(review){
    return axios.post(PLAYER_API_URL,review);
}

}
export default new Reviewservice()