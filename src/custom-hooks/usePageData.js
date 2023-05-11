import { useEffect, useState } from "react";
import firebase from "../utils/fb-config";


const usePageData = (fildName) =>{
    const [data, setData] = useState(null)

    useEffect( () => {
        firebase
            .database()
            .ref()
            .child(fildName)
            .once('value')
            .then(data => setData(data.val()))
    },[])
    return data
}

export default usePageData;