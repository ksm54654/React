import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CodeAtom, CodeAtom2 } from "./CodeAtom";
import code from '../101/getcode.json';

const CodeShow = () => {
    const sell = useRecoilValue(CodeAtom);
    const sell2 = useRecoilValue(CodeAtom2);
    const [itemTag, setItemTag] = useState();
    
    console.log('CodeShow', sell, sell2);

    useEffect(() => {
        if ( sell === '' || sell2 === '') return;
        let temp = code.filter((i) => i['예보구분'] === sell && i['항목값'] === sell2)
        setItemTag(
            <ul
            
            >

            </ul>
        )
    })

    return (
        <>
        </>
    );
}

export default CodeShow;