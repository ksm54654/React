import { useState, useRef, useEffect } from "react";
import styles from './MyRef.module.css';

const MyRef = () => {
    const txtref = useRef();
    // const txtref2 = useRef();

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        txtref.current.focus();
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];

        itemArr.current = new Set(itemArr.current); // 중복되는 데이터 생략
        itemArr.current = [...itemArr.current] ;
        // itemArr.current = [...new Set(itemArr.current)];

        let tempTag = itemArr.current.map(
            (item, idx) => <span key={'sp'+ idx} className={styles.sp}>{item}</span>);

        setItemTag(tempTag);
        console.log("addItem = ", itemArr.current);
        resetItem();
    }

    const resetItem = () => {
        txtref.current.value = '';
        txtref.current.focus();
        console.log("resetItem");
    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                                {/* <input ref={txtref} type="text" id="txt2" name="txt2" required /> */}
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div>
                    {itemTag}
                </div>
            </article>
        </main>
    );
}

export default MyRef;