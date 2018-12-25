import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { GQLQuery } from 'be/schema/graphqlTypes';

class GameQuery extends Query<GQLQuery> {}

const gameGQL = gql`
  query {
    game {
      subjects {
        meanings
        readings
        characters
      }
    }
  }
`;

const Game = () => (
  <GameQuery query={gameGQL}>
    {({ data, loading, error }) => {
      return (loading ? null :
        <div>
          {data.game.subjects.map(s => (
            <div>
              {s.characters}
            </div>
          ))}
        </div>
      );
    }}
  </GameQuery>
);

export default Game;
