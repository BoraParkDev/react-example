import React, { Component } from "react";

export interface StateProps {
  number: number;
  color: string | null;
}
export default class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef: StateProps | null = null;

  constructor(props: StateProps) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(
    // getDerivedStateFromProps는 props로 받아온 값을 state에 동기화시키는 용도로 사용
    // -> 부모에게서 받은 color 값을 state에 동기화
    // 컴포넌트가 마운트될 때와 업데이트될 때 호출
    nextProps: { color: string | null },
    prevState: { color: string | null }
  ) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<StateProps>,
    nextState: Readonly<StateProps>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(
    prevProps: Readonly<StateProps>,
    prevState: Readonly<StateProps>
  ) {
    // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate에서 조회할 수 있게 함
    // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  render() {
    return <div></div>;
  }
}
