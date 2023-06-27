const CntInput = ({ num, setNum }) => {

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


    return(
        <article>
            <form>
            <div className="grid">
                        <div></div>
                        <div><button onClick={Sub}>-</button></div>
                        <div><input type="text" id="txt1" name="txt1" value={num} readOnly /></div>
                        <div><button onClick={(e) => Add(e)}>+</button></div>
                        <div></div>
                    </div>
            </form>
        </article>
    )
}            

export default CntInput;