const data = {
  "Akko": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Balanga": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Billiri": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Dukku": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Funakaye": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Gombe": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Kaltungo": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Kwami": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Nafada": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Shongom": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  },
  "Yamaltu/Deba": {
    "Ward 1": ["Area 1", "Area 2"],
    "Ward 2": ["Area 3", "Area 4"]
  }
};

const lga = document.getElementById("lga");
const ward = document.getElementById("ward");
const area = document.getElementById("area");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const againBtn = document.getElementById("againBtn");
const pollSection = document.getElementById("pollSection");
const resultSection = document.getElementById("resultSection");
const message = document.getElementById("message");
const summary = document.getElementById("summary");
const stepNo = document.getElementById("stepNo");

Object.keys(data).forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  lga.appendChild(option);
});

function fillSelect(select, items, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>`;
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

function updateStep() {
  let step = 1;
  if (lga.value) step = 2;
  if (ward.value) step = 3;
  if (area.value) step = 4;
  stepNo.textContent = step;
}

startBtn.addEventListener("click", () => {
  pollSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  startBtn.textContent = "SAKE FARA ZAƁEN GWAJI";
  pollSection.scrollIntoView({behavior:"smooth"});
});

lga.addEventListener("change", () => {
  const wards = lga.value ? Object.keys(data[lga.value]) : [];
  fillSelect(ward, wards, wards.length ? "-- Zaɓi Ward --" : "-- Fara zaɓar LGA --");
  fillSelect(area, [], "-- Fara zaɓar Ward --");
  ward.disabled = !lga.value;
  area.disabled = true;
  message.textContent = "";
  updateStep();
});

ward.addEventListener("change", () => {
  const areas = lga.value && ward.value ? data[lga.value][ward.value] : [];
  fillSelect(area, areas, areas.length ? "-- Zaɓi Area / Unguwa --" : "-- Fara zaɓar Ward --");
  area.disabled = !ward.value;
  message.textContent = "";
  updateStep();
});

area.addEventListener("change", updateStep);

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="candidate"]:checked');

  if (!lga.value || !ward.value || !area.value || !selected) {
    message.textContent = "Da fatan zaɓi LGA, Ward, Area da zaɓinka kafin ka tura.";
    message.style.color = "#b42318";
    return;
  }

  message.textContent = "";
  summary.textContent =
    `LGA: ${lga.value} • Ward: ${ward.value} • Area: ${area.value} • Zaɓi: ${selected.value}`;

  pollSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({behavior:"smooth"});
});

againBtn.addEventListener("click", () => {
  document.querySelectorAll('input[name="candidate"]').forEach(r => r.checked = false);
  lga.value = "";
  fillSelect(ward, [], "-- Fara zaɓar LGA --");
  fillSelect(area, [], "-- Fara zaɓar Ward --");
  ward.disabled = true;
  area.disabled = true;
  message.textContent = "";
  updateStep();
  resultSection.classList.add("hidden");
  pollSection.classList.remove("hidden");
  pollSection.scrollIntoView({behavior:"smooth"});
});
