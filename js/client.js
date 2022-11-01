'use strict';

const textarea = document.querySelector("#tweet");
const counter = document.querySelector(".counter")
const limit = textarea.getAttribute('maxlength');

const charCount = () => {
  let current = textarea.value.length;
  let progress = limit - current;
  counter.textContent = progress + " / 140";
};

textarea.addEventListener("input", charCount);