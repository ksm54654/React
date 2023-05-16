import data from './dataTaccident.json';
import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import TaccidentDetail from './TaccidentDetail';
import { useState, useEffect } from 'react';

const Taccident = () => {
    // console.log(data['data'])
    // console.log(data.data)

    const Tac = data.data; // 사고 건수 ogj배열 (15)

    let c1 = Tac.map((item) => item['사고유형_대분류'])
    c1 = new Set(c1);  // 중복되는 데이터를 없애줌(집합).
    c1 = [...c1]  // 배열로 만들어줌 ...은 항목들 (c1의 항목들을 한개씩 낱개로 훑어서 배열로 만듦)
    // console.log('c1', c1);


    // 배열 안에 배열을 만듦
    // const c2 = [];
    // for (let item of Tac) {
    //     let temp = [item.사고유형_대분류, item.사고유형_중분류];
    //     // temp.push(item.사고유형_대분류);
    //     // temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    const c2 = Tac.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    // console.log('c2', c2);

    const [sel1, setSel1] = useState(0); // 대분류 선택
    const [sel2, setSel2] = useState([]); // 중분류 선택
    const [selData, setSelData] = useState();

    useEffect(() => {
        console.log('Taccident sel1 useeffect []', sel1);
    }, []);

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel1);
    }, [sel1]); // sel1이 바뀔때만 실행

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel2);
        if (sel2 !== undefined) {
            let temp = Tac.filter((item) =>
                item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]);
            console.log('temp', temp);
            setSelData(temp[0]);
        }
    }, [sel2, Tac]); // sel2가 바뀔때만 실행

    useEffect(() => {
        console.log('Taccident selData useeffect', selData) ;
        if (selData !== undefined) {
            const c3 = [selData.사고건수, selData.사망자수, selData.중상자수, selData.경상자수, selData.부상신고자수];
            console.log('c3', c3);
        }

    }, [selData]);

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel1);
        console.log('Taccident sel2 useeffect', sel2);
    });

    return (
        <main className='container'>
            <article>
                <header>
                    <TaccidentNav1 c1={c1} sel1={sel1} setSel1={setSel1} />
                    <TaccidentNav2 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
                </header>
                {selData && <TaccidentDetail selData = {selData} />}  
            </article>
        </main>
    );
        // 처음에는 값이 없으므로 'selData &&' 를 넣어야함 !! 
}

export default Taccident;