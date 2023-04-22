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
    <section className="grid w-full px-3 py-3 min-h-[100dvh] ">
      {/* CheckList */}
      {!allChecked && (
        <div className="border-t-2 border-secondary bg-accent shadow-3xl rounded-xl">
          <table
            className={`table-accent rounded-xl border-separate border-spacing-x-12 border-spacing-y-5`}
          >
            <thead className="">
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

      <div>
        <h2 className="text-3xl text-center">航班資訊</h2>
        <iframe
          className="w-full h-56 rounded-2xl"
          src="https://aviability.com/flight-number/flight-nx615-air-macau"
        ></iframe>
      </div>

      {/* Hotel */}
      <div className="text-center">
        <h2 className="text-3xl">飯店資訊</h2>
        <p>聯絡電話：+853 2836 1999</p>
        <h3>飯店地址</h3>
        <div>
          <iframe
            className="w-full h-56 rounded-2xl"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hotel%20Drag%C3%A3o%20Dourado+(Macau%20trip)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default page;
