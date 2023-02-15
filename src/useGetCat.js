import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

const useGetCat = () => {
    const {data: catData, isLoading} =useQuery(["cat"], async () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => {
            return res.data
        });
    });
}