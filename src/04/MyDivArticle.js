// const MyDivArticle = (probs) => {
// 매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용
import './MyDiv.css'; // 전역으로 해당됨
import style from './MyDiv.module.css' // 컴포넌트에 적용

// state변수 사용 1단계
import { useState } from 'react';

const MyDivArticle = ({ aname }) => {
    // const aname = probs.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1);  // 자바 스크립트 문법들을 react에 쓴거. 
    // let cnt = 0;

    // state변수 사용 2단계 : 변수 선언
    const [cnt, setCnt] = useState(0); // 배열형식으로 해야함.** 

    // click 이벤트 처리
    const like = () => {
        // cnt++ ;
        // state변수 사용 3단계 : 변수 내용 변경
        setCnt(cnt + 1); // cnt = 이런거 안됨. 
        console.log(cnt);
    }

    console.log(n);
    return (
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n}1</li>
                <li className={style.ali}>{'MyDiv' + n}2</li>
            </ul>
            {n === '1' && // 트루씨...? 조건이 참일때만 하는거 
                <footer>
                    <h2><span onClick={() => like()}>❤</span> {cnt}</h2>
                </footer>
            }
        </article>
    );
}

export default MyDivArticle;