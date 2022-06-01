import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { createCardFB } from './Store';

const Add = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const wordInput = React.useRef('');
  const haoInput = React.useRef('');
  const meanInput = React.useRef('');
  const exInput = React.useRef('');
  const readInput = React.useRef('');

  const addWord = () => {
    dispatch(
      createCardFB({
        word: wordInput.current.value,
        hao: haoInput.current.value,
        mean: meanInput.current.value,
        example: exInput.current.value,
        read: readInput.current.value
      })
    );
    history.push('/');
  };

  return (
    <div style={{ textAlign: 'center', height: '800px' }}>
      <Header>
        <h1
          style={{ cursor: 'pointer', display: 'grid', margin: '30px auto' }}
        >
          중국어 단어장
        </h1>
      </Header>
      <div style={{ marginTop: '130px', height: '100%' }}>
        <h3 style={{ margin: '30px', color: 'green' }}>단어 추가하기</h3>
        <Container>
          <Contents>
            <h3>단어</h3>
            <InputBox ref={wordInput} />
            <h3>병음</h3>
            <InputBox ref={haoInput} />
            <h3>의미</h3>
            <InputBox ref={meanInput} />
            <h3>예문</h3>
            <InputBox ref={exInput} />
            <h3>해석</h3>
            <InputBox ref={readInput} />
          </Contents>
          <AddButton style={{ textAlign: 'center', backgroundColor: 'green' }} onClick={addWord}>
            저장하기
          </AddButton>
        </Container>
      </div>
    </div>

  );
};


const Header = styled.div`
  position: fixed;
  background-color: #fff;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  z-index: 999;
`;

//테두리
const Container = styled.div`
  border: solid #eee 2px;
  border-radius: 10px;
  width: 380px;
  height: 650px;
  text-align: left;
  margin: auto;
  padding: 5vh 0px;
`;
// padding: 5vh 0px > 스크롤 자동으로 맞춰준다
const Contents = styled.div`
  margin: 20px 50px;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;

const InputBox = styled.input`
  color: dimgray;
  border: solid 2px;
  border-radius: 15px;
  font-size: 18px;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  /* word-break:normal;
  white-space:normal; */
  /* word-wrap: break-word; */
  text-overflow:clip;
  word-break:break-all;
`;

const AddButton = styled.div`
  background-color: #395b64;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  width: 200px;
  margin: 10px auto 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export default Add;
