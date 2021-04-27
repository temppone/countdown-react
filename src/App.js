import React from "react";

const App = () => {
  const [date, setDate] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(date);
  };

  //Função que calcula o tempo restante
  const calculateTimeLeft = () => {
    //Varável do ano
    let year = new Date().getFullYear();

    //O ano pode ser um input do usuário e também é possível adicionar outro inputs como data e mês ao new Date()
    const diff = +new Date(`${date}`) - +new Date();
    console.log(diff);
    let timeLeft = {};

    //Testa pra saber se o valor do tempo restante é maior que 0, caso seja, transforma todos os valores pra o padrão de data e hora
    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  //Altera o valor do time left a cada 1000ms
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="date"></label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <button>Começar</button>
        </form>
      </div>
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default App;
