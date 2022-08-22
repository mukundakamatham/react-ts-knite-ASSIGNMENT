import * as React from 'react';
import './style.css';

export default function App() {
  const [rows, setRows] = React.useState<Array<String>>([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
  ]);

  const [columns, setColumns] = React.useState<Array<Number>>([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);
  const [possible, setPossible] = React.useState<Array<any>>([]);
  const [active, setActive] = React.useState<String>();

  const handleClick = (e: String, el: number) => {
    let activeposition = e + el.toString();
    setActive(activeposition);
    let x = e.charCodeAt(0) - 64;
    let y = el;
    console.log(x, y);
    let knightMoves = [
      { x: 2, y: -1 },
      { x: 2, y: 1 },
      { x: 1, y: -2 },
      { x: 1, y: 2 },
      { x: -2, y: -1 },
      { x: -2, y: 1 },
      { x: -1, y: -2 },
      { x: -1, y: 2 },
    ];

    let possibleMoves = [];
    for (let m of knightMoves) {
      let row = String.fromCharCode(x + m.x + 64);

      let column = y + m.y;
      if (column >= 0 && row != '@' && row != '?')
        possibleMoves.push(row + '' + column);
    }
    setPossible(possibleMoves);
    console.log('Possible Coordinates:', possibleMoves);
  };
  const handlepossible = (e: String, el: number, possible: any) => {
    let data = possible.find((element: any) => {
      return element == e + el.toString();
    });
  
    return data;
  };
  return (
    <div className="chessboard">
      {rows.map((e: String) => (
        <div className={'rows'}>
          {' '}
          {columns.map((el: number) => (
            <div
              className={
                e + el.toString() == active
                  ? 'columns active'
                  : handlepossible(e, el, possible)
                  ? ' columns possible'
                  : 'columns'
              }
              onClick={() => handleClick(e, el)}
            ></div>
          ))}{' '}
        </div>
      ))}
    </div>
  );
}
