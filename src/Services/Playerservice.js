import axios from "axios";

const PLAYER_API_URL="http://localhost:8080/api/player";

class Playerservice{
   
getplayers(){
    return axios.get(PLAYER_API_URL);
   
}
createplayer(player){
    return axios.post(PLAYER_API_URL, player);
}


}
export default new Playerservice()