import React from "react";

const styles={
    wrapper : {
        margin:8,
        padding:8,
        display: 'flex',
        flexDirection : 'row', //밑으로 쌓이게끔
        border :'1px solid gray',
        borderRadius : 16,
    },
    messageText : {
        color :'black',
        fontSize:16,

    },
};

// 리액트의 Component 클래스를 상속받아서 클래스 컴포넌트로 사용
class Notification extends React.Component {
    constructor(props) {
        super(props);

        // 현재 컴포넌트에서 사용하는 상태값이 없음(클래스의 멤버변수라고 생각하삼)
        this.state={};
    }
    render() {
        return(
            //css 부분. 위에 나와있다
            <div style={styles.wrapper}>
                <span style = {styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}
export default Notification;