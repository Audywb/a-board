"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropDown: React.FC<{ onSelect: (value: string) => void }> = ({
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpenSelect(false);
    onSelect(value);
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 lg:pr-8 bg-transparent border-none hover:bg-transparent shadow-none font-bold text-text-base"
        onClick={() => setIsOpenSelect(!isOpenSelect)}
      >
        {selectedValue ? selectedValue : "Community "}
        <FontAwesomeIcon icon={faChevronDown} className="w-4" />{" "}
      </div>
      {isOpenSelect && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("History")}
            >
              History
            </a>
          </li>
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("Food")}
            >
              Food
            </a>
          </li>
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("Pets")}
            >
              Pets
            </a>
          </li>
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("Health")}
            >
              Health
            </a>
          </li>
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("Fashion")}
            >
              Fashion
            </a>
          </li>
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("Exercise")}
            >
              Exercise
            </a>
          </li>
          <li>
            <a
              className="hover:bg-green-100"
              onClick={() => handleSelect("Others")}
            >
              Others
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
