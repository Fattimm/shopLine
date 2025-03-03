import { useQuery, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur ! {error.message}</p>;

  return <h1>{data.hello}</h1>;
}

export default App;
