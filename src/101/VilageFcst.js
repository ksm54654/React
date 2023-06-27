import { useState, useEffect } from "react";
import FcstTable from "../101/FcstTable";


const VilageFcst = () => {
    // useState변수 : 변수 값이 변경이 되면 재 랜더링
    const [items, setItems] = useState();

    // 랜더링이 될 때 한번 실행
    useEffect(() => {
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + 'serviceKey=yFeWstqFXR3%2F5Ns%2B5y%2BgeMzYPC%2F92nnCfS7EeQsDeCQTvUYWRWw6mzKH5poug2ONtWND3bUD3OCJxBJlatK%2Flw%3D%3D';
        url = url + '&numOfRows=900';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230525';
        url = url + '&base_time=0500';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json';

        console.log(url);

        fetch(url)
            .then((resp) => resp.json()) // json 형태로 바꿔줘~!!
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err));

    }, []);

    useEffect(() => {
        console.log('items', items);

    }, [items]) // items가 바뀔때 마다 실행

    return (
        <>
            {items && <FcstTable items={items} gubun='단기예보' />}
        </>
    );
}

export default VilageFcst;