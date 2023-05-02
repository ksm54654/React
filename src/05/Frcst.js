import data from './dataFrcst.json';
import style from './Frcst.module.css';
import { useState } from "react"; // state변수 1단계

const Frcst = () => {

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    // dtKey.map((item) => console.log(data[item]));
    // cnKey.map((item) => console.log(data[item]));

    // 오브젝트 만들기 
    let dtcn = {};
    dtKey.map((item, idx) => dtcn[data[item]] = data[cnKey[idx]]);
    console.log(dtcn);

    // 상세 정보  (클릭하면 정보가 뜬다)
    // state변수 2단계 : 변수 선언
    const [footTag, setFootTag] = useState('');
    const [selDt, setselDt] = useState();

    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',')
        setselDt(k);
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        console.log(dtcnItem);
        dtcnItem = dtcnItem.map((item) =>
            <div key={item[0]}>
                <span className={style.it0}>{item[0]}</span>
                {/* {item[1].trim() == '낮음' ? <span className={style.it11}>▼</span>
                    : item[1].trim() == '보통' ? <span className={style.it12}>{item[1]}</span>
                        :<span className={style.it13}>▲</span>} */}
                <span className={item[1].trim() == '낮음' ? style.it11
                    : item[1].trim() == '보통' ? style.it12
                        : style.it13}>
                    {item[1]}
                </span>
            </div>
        )

        // state변수 3단계 : 값 변경  -> setFootTag(dtcn[k]);
        setFootTag(dtcnItem)
    }

    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) =>
        <div className={selDt === item ? style.dt1 : style.dt}
            key={idx}
            onClick={() => detail(item)}>
            {item}
        </div>
    );

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                </header>
                <div className='grid'>
                    {dtTag}
                </div>
                <footer>
                    <div className='grid'>
                        {footTag}
                    </div>
                </footer>
            </article>
        </main>
    );


}

export default Frcst;
