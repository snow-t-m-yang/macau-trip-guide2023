"use client";
import { CheckListType } from "@/type";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
    if (typeof window === "undefined") return CheckListSource;
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
    <div id="最後檢查" className="w-full space-y-3 ">
      <h2 className="text-5xl text-secondary">最後檢查</h2>
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
                  className="checkbox checkbox-accent"
                />
                <div
                  style={{ filter: "drop-shadow(0 0 10px)" }}
                  className="text-3xl text-white"
                >
                  {listItem.item}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CheckList;
