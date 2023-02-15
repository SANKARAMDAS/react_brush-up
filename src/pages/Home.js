import {useQuery} from "@tanstack/react-query";
import Axios from "axios";
export const HomePage = () => {
  const {data, isLoading, isError,refetch} = useQuery(["cat"],() => {
    return Axios.get("https://catfact.ninja/fact").
    then((res) => {
      return res.data
    })
  });

  if (isError) {
    return <h1>Sorry, there was an error</h1>
  };
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
      <h1>This is the home page and user is: {data?.fact}
        <button onClick={refetch}>Click me</button>
      </h1>
  )
}