import styles from './Gallery.module.css';
import { useState, useRef } from "react";

const GalleryView = ({kw}) => {
    // 오브젝트로 가져오기 때문에 kw를 써야함
    
    console.log(kw)

    // const showMv = (row) => {
    //     console.log(row)
    // onClick={() => showMv(row)}
    // }
    
    //2갈래로 나눠지게 나와야함... 어캐하지 .... ... 
    
    const [showTag, setShowTag] = useState();

    let kwTags = [];
    for (let row of kw) {
        console.log(row.galTitle, row.galWebImageUrl, row.galPhotographyLocation, row.galSearchKeyword);

        let keywordArr =  row.galSearchKeyword.split(',')
        let tempTag = keywordArr.map(
                (item, idx) => <span key={'sp'+ idx} className={styles.sp}>{item}</span>);
        setShowTag(tempTag);


        kwTags.push(
            <article key={row.galContentId}>
                <header className="hkw">
                    <h4 className={styles.title}>{row.galTitle}</h4>
                    {row.galPhotographyLocation}              
                </header>
                <img src={row.galWebImageUrl} />
                <footer>
                    {tempTag}
                </footer>
            </article>
            

        )
    }

    return (
        <div>
            
                {kwTags}
            
        </div>
    )
};

export default GalleryView;