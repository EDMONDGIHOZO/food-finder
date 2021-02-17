import { useState, useEffect } from "react";
import makeups from "../services/makeups";

export default () => {
  const [brands, setBrands] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchData = async (term) => {
    try {
      const response = await makeups.get(`/products.json?brand=${term}`);

      setBrands(response.data);
    } catch (error) {
      setErrorMessage("something went badly");
    }
  };

  //   set default data
  useEffect(() => {
    searchData("smashbox");
  }, []);

  return [searchData, brands, errorMessage];
};
