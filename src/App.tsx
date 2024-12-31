import { useState } from 'react';

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listOfMemo, setListOfMemo] = useState([
    { id: Math.floor(Math.random() * 10000), memo: 'Hello' },
  ]);

  const [isEdit, setIsEdit] = useState(false);
  const [editedId, setEditedId] = useState(0);

  function filterList(memo: number) {
    var newMemo = listOfMemo.filter((memoString) => {
      return memoString.id != memo;
    });

    setListOfMemo(newMemo);
  }

  function editMemo(id: number) {
    listOfMemo.map((memo) => {
      if (memo.id === id) {
        memo.memo = inputValue;
      }
    });
    setIsEdit(false);
  }

  return (
    <>
      <table>
        <tr>
          <th>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />

            <button
              onClick={() => {
                if (!isEdit) {
                  setListOfMemo([
                    ...listOfMemo,
                    {
                      id: Math.floor(Math.random() * 10000),
                      memo: inputValue,
                    },
                  ]);
                } else {
                  editMemo(editedId);
                }
                console.log(listOfMemo);
              }}
            >
              {isEdit ? 'Edit' : 'Add'}
            </button>
          </th>
        </tr>
      </table>
      <table>
        {listOfMemo.map((memo) => {
          return (
            <tr>
              <h1>{memo.memo}</h1>
              <th>
                <button
                  onClick={() => {
                    filterList(memo.id);
                  }}
                >
                  Delete
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    setIsEdit(true);
                    setEditedId(memo.id);
                  }}
                >
                  EDIT
                </button>
              </th>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
