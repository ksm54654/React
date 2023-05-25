import { useState, useEffect } from "react";
import FcstTable from "./FcstTable";
import name from './getcode.json';
import { useParams } from "react-router-dom";

const VilageFcst = () => {
    const [ultlist, setUltlist] = useState();

    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    useEffect(() => {
        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=yFeWstqFXR3%2F5Ns%2B5y%2BgeMzYPC%2F92nnCfS7EeQsDeCQTvUYWRWw6mzKH5poug2ONtWND3bUD3OCJxBJlatK%2Flw%3D%3D&numOfRows=1000&dataType=JSON&pageNo=1&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
        console.log('url = ', url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setUltlist(data.response.body.items.item))
            .catch((err) => console.log(err));
    }, []);

    name = name.filter((item) => item["예보구분"] === "단기예보");
    const ops = name.map((item) =>
        <option value={item["예보구분"]} key={item["예보구분"] + item["항목값"]}>
            {item["항목명"]}({item["항목값"]})
        </option>
    );

    return (
        <article>
            <header>
                <div className="grid">
                    {area} 단기예보({dt})
                    <select id="sel" name="sel">
                        <option value=''>선택</option>
                        {ops}
                    </select>
                </div>

                

            </header>
            {ultlist && <FcstTable item={ultlist} gubun="단기예보" />}
        </article>
    );
}

export default VilageFcst;