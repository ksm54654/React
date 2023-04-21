import logo from '../logo.svg';
import './Hello.css';
import MyClockImage from '../02/MyClockImage';

const Hello = () => {// 변수 쓸때는 중괄호 사용
    let name = '김은빈';
    let git = 'https://github.com/ksm54654';
    return ( // 함수 만들고 무조건 return 써야함. (한개의태그, 자식태그o 형제태그x)
        <main className='container'>
            <article data-theme="dark">
                <div>
                <img src={logo} className='App-logo' alt='logo' />
                </div>
                <MyClockImage />
                <footer>
                    <hgroup>
                      <h1>{name}</h1> 
                      <h2><a href = {git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>
    );
}

export default Hello;  // 내보내기 꼭 해줘야함.