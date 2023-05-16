import styles from './Gallery.module.css' ;

const GalleryArticle = ({item}) => {
    let tags = item.galSearchKeyword.split(',');
    tags = tags.map((i) => <div className={styles.sp}>{i}</div>)

    return (
        <article>
            <header>
                <span className={styles.title}>{item.galTitle}</span>
                <span>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl} />
            </div>
            <footer>
                {tags}
            </footer>
        </article>
    );
}

export default GalleryArticle;