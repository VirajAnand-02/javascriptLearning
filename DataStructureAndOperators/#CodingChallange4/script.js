"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const txt = document.querySelector("textarea").value.split("\n");
  for (const [i, variable] of txt.entries()) {
    const strTrim = variable.trim();
    const index_ = strTrim.indexOf("_");
    console.log(
      (
        strTrim.slice(0, index_).toLowerCase() +
        strTrim[index_ + 1].toUpperCase() +
        strTrim.slice(index_ + 2).toLowerCase()
      ).padEnd(20, " ") + "✅".repeat(i + 1)
    ); // ✅
  }
  //   console.log(tr);
});
