// const CntDisp = (probs) => {
//     const num = probs.num;

const CntDisp = ({num}) => {

    return (
        <article>
            <h1>입력값 : {num}, 입력값 2배 : {num * 2}</h1>
        </article>
    );
}

export default CntDisp;