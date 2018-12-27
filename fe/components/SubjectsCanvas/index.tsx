import { Subject } from "fe/lib/subject";

type Props = {
  subjects: Set<Subject>;
};

const SubjectsCanvas = ({ subjects }: Props) => (
  <div>
    {Array.from(subjects).map(s =>
      s.completed ? null : <div>{s.subject.characters}</div>
    )}
  </div>
);

export default SubjectsCanvas;
