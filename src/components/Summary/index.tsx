import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './style';

export function Sumary() {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img
            src={`${process.env.PUBLIC_URL}assets/income.svg`}
            alt="entradas"
          />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img
            src={`${process.env.PUBLIC_URL}assets/outcome.svg`}
            alt="entradas"
          />
        </header>
        <strong>
          {' '}
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img
            src={`${process.env.PUBLIC_URL}assets/total.svg`}
            alt="entradas"
          />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
}
