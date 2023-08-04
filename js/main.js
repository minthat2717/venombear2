// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// js for roadmap
var p = document.getElementById("replace-me");
var t = document.getElementById("title");
var t1 = "Phase 1: Genesis Release";
var t2 = "Phase 2: Jungle Exploration";
var t3 = "Phase 3: Community Expansion";
var t4 = "Phase 4: Utility Integration";
var t5 = "Phase 5: Ecosystem Expansion";

var p1 =
  "<ul><li>Engage with the community through social media campaigns and promotional activities.</li><li>Establish partnerships and collaborations to expand the reach of Venom Monkeys.</li></li><li>Establish partnerships and collaborations to expand the reach of Venom Monkeys.</li></li></ul>";
var p2 =
  "<ul><li>Launch mainnet collection of Venom Monkeys NFTs on Venom Mainnet.</li><li>Introduce an interactive game where collectors can search for hidden Venom Monkeys in the jungle.<li>Implement a leaderboard system to track and reward the most successful collectors.</li> </li></li><li>Organize community events and challenges related to the jungle exploration theme.</li><li>Continuously release new Monkey designs to keep the collection fresh and exciting.</li></ul>";
var p3 =
  "<ul><li>Launch a governance token to give our community members a say in the future development of Venom Monkeys.</li><li>Establish a decentralized autonomous organization (DAO) to facilitate community-driven decision-making.</li><li>Host virtual meetups and conferences to connect with other NFT enthusiasts and artists.</li></ul>";
var p4 =
  "<ul><li>Integrate Venom Monkeys into various platforms and applications, allowing them to be used as avatars, emojis, or in virtual worlds.</li><li>Collaborate with gaming studios to develop unique in-game experiences featuring Venom Monkeys.</li><li>Launch limited-edition merchandise and physical collectibles tied to the Venom Monkeys brand.</li><li>Enable utility features that allow collectors to unlock exclusive content or experiences through their Venom Monkeys ownership.</li></ul>";

var p5 =
  "<ul><li>Expand the Venom Monkeys ecosystem by partnering with other NFT projects and blockchain platforms.</li><li>Launch cross-chain compatibility to increase accessibility and reach a wider audience.</li><li>Collaborate with artists to create special collaborative editions of Venom Monkeys.</li><li>Establish a charitable initiative where a portion of proceeds from Venom Monkeys sales go towards environmental and wildlife conservation efforts.</li></ul>";

//   phase1
document.querySelector("#open-popup1").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t1;
  p.innerHTML = p1;
});
//  phase 2
document.querySelector("#open-popup2").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t2;
  p.innerHTML = p2;
});

// phase 3
document.querySelector("#open-popup3").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t3;
  p.innerHTML = p3;
});
// phase 4
document.querySelector("#open-popup4").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t4;
  p.innerHTML = p4;
});
// phase 5
document.querySelector("#open-popup5").addEventListener("click", function () {
  document.body.classList.add("active-popup");
  t.innerText = t5;
  p.innerHTML = p5;
});

// close btn
document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.body.classList.remove("active-popup");
    document.body.classList.remove("blur-filter");
  });

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  //   navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
