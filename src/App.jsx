import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import * as S from '../src/components/Header/header_style';


export default function App() {
  return (
    <>
     <S.GlobalStyle />
     <Header />
     <Main />
    </>
  )
}
