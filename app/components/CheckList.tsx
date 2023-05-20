"use client";
import { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { v4 as uuidv4 } from "uuid";

type CheckListType = {
  id: string;
  item: string;
  checked: boolean;
};

const CheckListSource: CheckListType[] = [
  {
    item: "護照",
    id: uuidv4(),
    checked: false,
  },
  {
    item: "臺胞證",
    id: uuidv4(),
    checked: false,
  },
  {
    item: "充電器",
    id: uuidv4(),
    checked: false,
  },
];

const CheckList = () => {
  const [checkedList, setCheckedList] = useState<CheckListType[]>(() => {
    const checkedListData = localStorage.getItem("checkedList_state");
    return checkedListData !== null
      ? JSON.parse(checkedListData)
      : CheckListSource;
  });

  const handleIsChecked = (checked: boolean, id: string) => {
    const updatedList = checkedList.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setCheckedList(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("checkedList_state", JSON.stringify(checkedList));
  }, [checkedList]);

  return (
    <div className="space-y-3">
      <h2 className="text-3xl">最後檢查</h2>
      <div className="inset-x-0 grid w-full py-5 place-items-center bg-white/20 shadow-3xl rounded-xl">
        <ul className="flex flex-col items-start gap-3 w-fit">
          {checkedList.map((listItem) => (
            <li key={listItem.id}>
              <label className="flex gap-7">
                <input
                  type="checkbox"
                  checked={listItem.checked}
                  onChange={(e) =>
                    handleIsChecked(e.target.checked, listItem.id)
                  }
                  className=""
                />
                <div className="text-2xl font-bold">{listItem.item}</div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CheckList;
