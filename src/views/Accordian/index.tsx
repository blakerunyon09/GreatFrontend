import { useState } from 'react';
import "./accordian.module.css"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"

type Row = {
    title: string;
    copy: string;
    isOpen: boolean;
    id: number;
}

export default function Accordion() {
    const [rows, setRows] = useState<Row[]>([
    {
      id: 0,
      title: "HTML",
      copy: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      isOpen: false
    },
    {
      id: 1,
      title: "CSS",
      copy: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      isOpen: false
    },
    {
      id: 2,
      title: "JavaScript",
      copy: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      isOpen: false
    },
  ]);

  const handleClick = (id: number) => {
    setRows([...rows.map((row) => {
      return id === row.id ? {...row, isOpen: !row.isOpen} : { ...row }
    })]);
  }

  const Row = ({ title, copy, isOpen, id}: Row) => {
    return (
      <div>
        <div onClick={() => handleClick(id)}>
          {title}{isOpen ? <FaArrowDown /> : <FaArrowUp /> }
          <span
            aria-hidden={true}
            className={isOpen ? "accordion-icon" : "accordion-icon accordion-icon--rotated"}
          />
        </div>
        {isOpen && <div>
          { copy }
        </div>}
      <hr/>
      </div>
    )
  }

  return (
    <div>
      { rows.map(({title, copy, id, isOpen}) => {
        return <Row 
          key={id}
          title={title} 
          copy={copy} 
          id={id}
          isOpen={isOpen}
        />
      })}
    </div>
  );
}