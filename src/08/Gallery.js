/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=yFeWstqFXR3%2F5Ns%2B5y%2BgeMzYPC%2F92nnCfS7EeQsDeCQTvUYWRWw6mzKH5poug2ONtWND3bUD3OCJxBJlatK%2Flw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import GalleryView from './GalleryView';

const Gallery = () => {
    const [kwlist, setKwlist] = useState();

    // 키워드 input
    const txt1 = useRef();

    // 컴포넌트가 맨처음 랜더링 되면 
    useEffect(() => {
        txt1.current.focus();
    }, []);

    // 확인버튼
    const show = (e) => {
        e.preventDefault();
        if(txt1.current.value === '') return;
        
        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);
        getDate(kw);
    }

    // 취소 버튼
    const showClear = (e) => {
        e.preventDefault();
        txt1.current.value = '';
        txt1.current.focus();
        
    }

    const getDate = (kw) =>{
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=yFeWstqFXR3%2F5Ns%2B5y%2BgeMzYPC%2F92nnCfS7EeQsDeCQTvUYWRWw6mzKH5poug2ONtWND3bUD3OCJxBJlatK%2Flw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`
        console.log('url = ',url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setKwlist(data.response.body.items.item))
        .catch((err) => console.log(err));
    }

    return(
        <main className="container">
            <form>
            <article>
                <header>
                    <h1>한국관광공사_관광사진 정보</h1>
                </header>
                <div className="grid">
                    <div>
                    <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." onChange = {() => getDate()}required />
                    </div>
                    <div className={styles.btDiv}>
                        <button onClick={(e) => show(e)}>확인</button>
                        <button onClick={(e) => showClear(e)}>취소</button>
                    </div>
                </div>
                
                
            </article>
                {kwlist && <GalleryView kw={kwlist} />}
            </form>
        </main>
    )
};

export default Gallery;