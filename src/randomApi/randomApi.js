import axios from "axios";
const API_URL = "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"

const getRandomNums = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data.split("\n")
        const result = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== "") {
                result.push(data[i]);
            }
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

console.log(getRandomNums());

export default getRandomNums;