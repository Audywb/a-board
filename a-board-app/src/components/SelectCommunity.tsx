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
    } else {
      setSelectedValue("");
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
              className={`hover:bg-green-100 ${
                selectedValue == "History" &&
                "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("History")}
            >
              History
              {selectedValue == "History" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-green-100 ${
                selectedValue == "Food" && "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("Food")}
            >
              Food
              {selectedValue == "Food" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-green-100 ${
                selectedValue == "Pets" && "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("Pets")}
            >
              Pets
              {selectedValue == "Pets" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-green-100 ${
                selectedValue == "Health" && "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("Health")}
            >
              Health
              {selectedValue == "Health" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-green-100 ${
                selectedValue == "Fashion" &&
                "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("Fashion")}
            >
              Fashion
              {selectedValue == "Fashion" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-green-100 ${
                selectedValue == "Exercise" &&
                "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("Exercise")}
            >
              Exercise
              {selectedValue == "Exercise" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-green-100 ${
                selectedValue == "Others" && "bg-green-100 flex justify-between"
              }`}
              onClick={() => handleSelect("Others")}
            >
              Others
              {selectedValue == "Others" && (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
                    stroke="#4A4A4A"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectCommu;
