import { Link } from "react-router-dom";
import { CntAtoms } from "./CntAtoms";
import { useRecoilState } from "recoil";

const CntInput = () => {
    const [num, setNum] = useRecoilState(CntAtoms);

    const Add = (e) => {
        e.preventDefault();
        if (num + 1 > 10) setNum(10);
        else setNum(num + 1);
    }

    const Sub = (e) => {
        e.preventDefault();  // form이 있으면 버튼을 누를떄 마다 리로드 대서 
        if (num - 1 < 0) setNum(0);
        else setNum(num - 1);
    }

    return (
        <article>
            <form>
                <div className="grid">
                    <div></div>
                    <div><button onClick={Sub}>-</button></div>
                    <div><input type="text" id="txt1" name="txt1" value={num} readOnly /></div>
                    <div><button onClick={Add}>+</button></div>
                    <div></div>
                </div>
            </form>
            <footer>
                <Link to='/disp'>출력화면이동</Link>
            </footer>
        </article>
    );
}

export default CntInput;