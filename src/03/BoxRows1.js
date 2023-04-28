// const BoxRows = (probs) => { //probs로 box에 있는 데이터를 받음
const BoxRows = ({ mv }) => {
    //const mvlist = [...probs.mv];
    console.log("boxrows", mv)

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent == 0) icon = '-';
        else if (intent < 0) icon = '▼';
        else icon = '▲';
        trTags.push(
            <tr className="mytr" key={row.movieCd}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span id='d1'>{parseInt(row.salesAmt).toLocaleString()} ₩</span></td>
                <td>{icon} {intent === 0? '' :Math.abs(intent)}</td>
            </tr>
        );
    }

    console.log(trTags);
    return (
        <>
            {trTags}
        </>
    );
}

export default BoxRows;