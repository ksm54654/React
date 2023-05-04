import style from'./Taccident.module.css';

const TaccidentDetail = ({ selData }) => {
    // console.log('detail', Object.keys(selData));

    const tagKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']

    var price = 10000;
    price.toLocaleString();
    let tags = tagKey.map((k, idx) =>
        <div key={'k' + idx} className={style.k1}>
            {k} {selData[k]}
        </div>
    )

    return (
        <div className="grid">
            {tags}
        </div>
    );
}

export default TaccidentDetail;