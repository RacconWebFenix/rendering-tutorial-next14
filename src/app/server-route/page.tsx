import ImageSlider from "../components/imageSlider";
import { clientSideFunction } from "../utils/client-utils";
import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoutePage() {
  console.log("Server route render");
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();

  return (
    <>
      <h1>Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
