import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = React.useState('');
  const { searchRepositories } = useActions();
  const { data } = useTypedSelector((state) => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>

      <ul>
        {data.map((repo: string) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesList;
