//NotificationList.jsx
import React from "react";
import Notification from "./Notification";
import notification from "./Notification";

//js 배열은 다른 언어의 list와 같다.

// 댓글 데이터 생성
const reservedNotifications = [
    {id:1,message : "안녕하세요, 오늘 일정 알려드립니다"},
    {id:2,message: "오후 수업 시간입니다."},
    {id:3,message: "이제 곧 쉬는 시간입니다"},
];

// 자바스크립트 타이머 객체 정보를 저장하는 변수
// setTimeout : 1회용 타이머 , 지정된 시간 이후에 한 번 동작, 실행시 타이머 정보를 반환
//              타이머 삭제 시 clearTimeout()을 사용
// setInterval : 지정된 시간마다 동작하는 타이머,실행시 타이머 정보를 반환 
//               멈출수가 없음. 타이머 삭제 시 clearInterval()을 사용한다
var timer;


class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 현재 컴포넌트의 상태인 notifications 선언
        this.state = {
            // 빈 배열 타입인 state가 생성
            notifications:[],
            // notifications: reservedNotifications,
        };
    }

    // 화면에 처음 그려질 내용
    render() {
        return (
                // state의 notifications 배열을 가지고 화면을 그려줌
            // notifications 배열의 기본값이 비었기 때문에 화면에 아무것도 그리지 않는다
        // notifications:[] 이 값을 가져와 돌린다.
        // 지금 빈 배열이라 돌릴 수 없다. 그래서 밑에 부분이 화면에 그려지지 않는다.
        <div>
            {
                this.state.notifications.map((item) => {
                    return <Notification key={item.id} message={item.message}/>
                })
            }

            {/*원래는 아래 처럼 해야 했다. 하지만 귀찮으니까 위의 것 처럼 행한다.*/}
            {/*<Notification key={reservedNotifications[0].id} message = {reservedNotifications[0].message}/>,*/}
            {/*<Notification key={reservedNotifications[1].id} message = {reservedNotifications[0].message}/>,*/}
            {/*<Notification key={reservedNotifications[2].id} message = {reservedNotifications[0].message}/>,*/}
        </div>
    )

    }

    // render() 함수 실행 후 동작(다 끝내고 동작하는 함수)
    componentDidMount() {
        // object 타입의 확장 표현식을 통해서 변수 notifications에 state가 가지고 있는 notifications의 데이터를
        // 대입한다.
        //const/let [변수명1, 변수명2, ...] = [원본배열] -> 배열 값을 차례대로 하나씩 대입시킨다.
        // const val1 = 10; 이거랑 유사하다.
        // const val2 = 20;

        const {notifications} = this.state;
        //state의 notification의 데이터가 비어 있음
        // const {notificaions} = this.state.notifications
        // 랑 같은 거.(확장표현식)


        // 타이머를 사용하여 지정된 시간마다 동작하도록 설정함
        // timer = setInterval(() => {
        //     if (notifications.length < reservedNotifications.length) { //notifications.length는 무조건 0으로 뜨고 reservedNotifications.length는 3
        //         const index = notifications.length;
        //         // 배열 notifications에 데이터 추가
        //         notifications.push(reservedNotifications[index]); //데이터 하나를 추가해준다
        //
        //         //state의 상태 수정
        //         this.setState({
        //             // this.state에 있는 notifications에 현재 componentDidMount 안에 있는 지역변수
        //             // notifications의 데이터를 저장한다
        //             notifications: notifications,
        //         });
        //     } else {
        //         clearInterval(timer);
        //     }
        // }, 2000);


        setTimeout(() => {
            this.setState({
                notifications : reservedNotifications,
            });
            console.log("데이터 추가 완료");
        }, 3000);

        console.log("마운트 완료")
    }

    componentDidUpdate() {
        console.log("상태 업데이트")
    }
}

export default NotificationList;










