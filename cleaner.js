function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

document.querySelector("h1").style.borderBottom = "3px solid black";
document
  .querySelectorAll("h2")
  .forEach(el => (el.style.borderBottom = "3px solid black"));
document.querySelectorAll("a").forEach(el => {
  el.style.color = "black";
  el.style.textDecoration = "none";
  el.style.background = "none";
});

const socialNetworks = document.querySelector("#social-networks");
const footer = document.querySelector("footer");
const hr = (document.querySelector("hr").style.visibility = "hidden");

socialNetworks && (socialNetworks.style.marginTop = "30px");
footer && (footer.style.visibility = "hidden");
hr && (hr.style.visibility = "hidden");
