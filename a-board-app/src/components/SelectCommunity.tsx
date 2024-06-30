"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SelectCommu: React.FC<{
  onSelect: (value: string) => void;
  defaultValue: string;
}> = ({ onSelect, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  useEffect(() => {
    if (defaultValue && defaultValue != "") {
      setSelectedValue(defaultValue);
    }else{
      setSelectedValue("")
    }
  }, [defaultValue]);

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
        className="btn m-1 lg:pr-8 bg-white border-success hover:bg-white hover:border-success shadow-none font-bold text-success"
        onClick={() => setIsOpenSelect(!isOpenSelect)}
      >
        {selectedValue ? selectedValue : "Choose a community "}
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

export default SelectCommu;
