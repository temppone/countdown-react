import React from "react";

const App = () => {


  //Função que calcula o tempo restante
  const calculateTimeLeft = () => {
    //Varável do ano
    let year = new Date().getFullYear();

    //O ano pode ser um input do usuário e também é possível adicionar outro inputs como data e mês ao new Date()
    const diff = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};

    //Testa pra saber se o valor do tempo restante é maior que 0, caso seja, transforma todos os valores pra o padrão de data e hora
    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
      //Tentantiva de fazer um pouco mais inteligente
      // timeLeft = {
      //   seconds: Math.floor((diff / 1000) % 60),
      //   minutes: Math.floor((this.seconds / 60) % 60),
      //   hours: Math.floor((this.minutes / 60) % 60),
      //   days: Math.floor((this.hours / 24) % 24),
      // };
      // console.log(timeLeft);
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>

      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default App;
