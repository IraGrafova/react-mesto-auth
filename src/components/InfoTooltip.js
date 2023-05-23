import React from "react";
import { useState, useEffect } from "react";

function InfoTooltip({ isOpen, onClose, name, isTooltipPopup, }) {

  useEffect(() => {}, [isOpen]);

  return (
    <div className={`popup ${isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__form">
        <button
          className={`popup__close popup__close_type_${name}`}
          onClick={onClose}
          type="button"
        ></button>
        <form className="card-form" name={name} id={`${name}-form`}>
          <img src={isTooltipPopup.img} />
          <h2>{isTooltipPopup.text}</h2>
        </form>
      </div>
    </div>
  );
}
export default InfoTooltip;
