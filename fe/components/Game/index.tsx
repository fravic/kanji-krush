import { GQLGame } from "be/schema/graphqlTypes";

type Props = {
  game: GQLGame | null;
};

const Game = ({ game }: Props) => (
  <div>
    {game.subjects.map(s => (
      <div>{s.characters}</div>
    ))}
  </div>
);

export default Game;
