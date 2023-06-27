import { useState , useEffect} from "react";
import CntDisp from "./CntDisp";

const Cnt = () => {
    const [num, setNum] = useState(0);  // 초기값 0
    

    useEffect(() => {
        console.log("n", num);
    }, [num]);



    return (
        <main className="container">
            <CntInput num={num} setNum={setNum} />
            <CntDisp n={num} />
        </main>
    );
}

export default Cnt;