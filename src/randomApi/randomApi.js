import axios from "axios";
const API_URL = "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"

const getRandomNums = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = await response.data.split("\n").filter((str) => {
            return /\S/.test(str);
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getRandomNums;