import React from "react";

const App = () => {
  const calculateTimeLeft = () => {

    //Varável do ano
    let year = new Date().getFullYear();

    //O ano pode ser um input do usuário e também é possível adicionar outro inputs como data e mês ao new Date()
    const diff = +new Date(`10/01/${year}`) - +new Date();


  };
};

export default App;
