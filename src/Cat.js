import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

export const Cat = () => {
      return (
          <div>
              <h1> {catData?.fact}</h1>
          </div>
      )
}