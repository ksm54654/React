import { useState } from "react";
import './Box.css';

// const BoxRows = (probs) => { //probs로 box에 있는 데이터를 받음
const BoxRows = ({ mv }) => {
    //const mvlist = [...probs.mv];
    // console.log("boxrows", mv)

    // 상세 정보 
    const [footTag, setFootTag] = useState('');

    // 클릭된 자료 확인
    const showMv = (row) => {
        console.log(row)
        setFootTag(`[${row.movieCd}] ${row.movieNm} 개봉일 : ${row.openDt}`);    

        
    }

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent == 0) icon = '-';
        else if (intent < 0) icon = '▼';
        else icon = '▲';
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span id='d1'>{parseInt(row.salesAmt).toLocaleString()} ₩</span></td>
                <td>{icon} {intent === 0 ? '' : Math.abs(intent)}</td>
            </tr>
        );
    }

    console.log(trTags);
    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr id ='t1'>
                    <td colSpan={4}>{footTag}</td>
                </tr>
            </tfoot>
        </>
    );
}

export default BoxRows;