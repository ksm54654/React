import {Link} from 'react-router-dom'; //a태그 못쓰고 링크로 걸어야함

const RouteNav = () => {

    return(
        <nav>
            <ul>
                <li><Link to ='/' role='button'>Home</Link></li>
                <li><Link to ='/page1/🍎/🍑' role='button'>Page1</Link></li>
                <li><Link to ='/page2?item=🍎&item1=🍑' role='button'>Page2</Link></li>
            </ul>
        </nav>
    );
}

export default RouteNav;