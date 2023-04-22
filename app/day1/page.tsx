"use client";
import { useState, useEffect } from "react";
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

const page = () => {
  const [checkedList, setCheckedList] =
    useState<CheckListType[]>(CheckListSource);

  const handleIsChecked = (checked: boolean, id: string) => {
    console.log(checked);
    const updatedList = checkedList.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !checked };
      }
      return item;
    });

    setCheckedList(updatedList);
  };

  // useEffect(() => {
  //   localStorage.setItem("checkedList_state", JSON.stringify(checkedList));
  // }, [checkedList]);

  // useEffect(() => {
  //   const checkedListData = localStorage.getItem("checkedList_state");
  //   if (checkedListData !== null) {
  //     setCheckedList(JSON.parse(checkedListData));
  //   }
  // }, []);

  return (
    <section className="grid w-full text-center px-3 py-3 gap-5 min-h-[100dvh] ">
      {/* CheckList */}

      <div className="space-y-3">
        <h2 className="text-3xl">最後檢查</h2>
        <div className="py-5 bg-white/20 shadow-3xl rounded-xl">
          <ul className="flex flex-col">
            {checkedList.map((listItem) => (
              <li
                key={listItem.id}
                className="self-start mx-auto justify-self-start"
              >
                <label className="flex gap-5">
                  <input
                    type="checkbox"
                    checked={listItem.checked}
                    onChange={(e) =>
                      handleIsChecked(e.target.checked, listItem.id)
                    }
                    className="border-white shadow-inner checkbox"
                  />
                  <div className="text-2xl font-bold ">{listItem.item}</div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl ">航班資訊</h2>
        <iframe
          className="w-full h-56 rounded-2xl"
          src="https://aviability.com/flight-number/flight-nx615-air-macau"
        ></iframe>
      </div>

      {/* Hotel */}
      <div>
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
