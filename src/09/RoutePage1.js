import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const item = useParams().item;
    const item1 = useParams().item1;

    return(
        <article>
            <header>
                <h1>RoutePage1</h1>
            </header>
            <h1>{item}</h1>
            <h1>{item1}</h1>
        </article>
    );
}

export default RoutePage1;