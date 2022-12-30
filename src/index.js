import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// default로 되어있어서 {}없이 바로 import 가능하다
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import NotificationList from "./mounts/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/*    js의 문법. js의 return부분을 사용하겠다는 의미.
    jsx = js + html + xml
    여기에 넣을 때 전부 시작태그 끝 태그 다 있어야 한다.
    <APP></APP> 혹은 <APP / > 둘 중 하나를 골라 해야한다.*/}

    {/*    무조건 대문자A를 사용해줘야 한다.*/}
    {/*    jsx문법에서 화면을 렌더링하기 위한 태그의 이름은 반드시 첫글자가 "대문자"이어야 함*/}
    {/*    대문자를 사용하는 이유는 일반적으로 html 태그를 모두 소문자로 사용하기 때문에 일반 html태그인지
            jsx문법으로 생성된 태그인지를 구분하기 위함이다*/}

    <App />
        <br/><hr /><br />
    <App2/>
        <NotificationList/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </React.StrictMode>
    // <h2>이렇게 부모태그가 2개가 되면 오류가 발생한다.</h2>
);
reportWebVitals();
