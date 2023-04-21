"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type CheckListType = {
  id: string;
  item: string;
};

const CheckListSource: CheckListType[] = [
  {
    item: "護照",
    id: uuidv4(),
  },
  {
    item: "台胞證",
    id: uuidv4(),
  },
  {
    item: "充電器",
    id: uuidv4(),
  },
];

const page = () => {
  const [checkedItem, setCheckedItem] = useState(0);
  const [allChecked, setAllChecked] = useState(false);

  const handleIsChecked = (checked: Boolean) => {
    if (checked) {
      setCheckedItem((i) => i + 1);
    } else {
      setCheckedItem((i) => i - 1);
    }
  };

  useEffect(() => {
    if (checkedItem === CheckListSource.length) {
      setAllChecked(true);
    }
  }, [checkedItem]);

  return (
    <section className="grid min-h-[100dvh] place-items-center">
      <h1 className="text-5xl">Day 1</h1>

      {/* CheckList */}
      {!allChecked && (
        <div className="border-t-2 border-secondary bg-accent shadow-3xl rounded-xl">
          <table
            className={`table-accent rounded-xl border-separate border-spacing-x-12 border-spacing-y-5`}
          >
            <thead>
              <tr>
                <th className="text-3xl ">最後檢查</th>
              </tr>
            </thead>
            <tbody>
              {CheckListSource.map((listItem) => (
                <tr key={listItem.id}>
                  <th>
                    <label className="flex items-center gap-5">
                      <input
                        type="checkbox"
                        onChange={(e) => handleIsChecked(e.target.checked)}
                        className="border-white shadow-inner checkbox"
                      />
                      <div className="text-2xl font-bold ">{listItem.item}</div>
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default page;
