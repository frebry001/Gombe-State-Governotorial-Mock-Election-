const gombeData = {
  "Gombe": {
    "Buruya / Herwagana": ["PU 001 - Central Primary School", "PU 002 - Herwagana Dispensary", "PU 003 - Open Space Market"],
    "Jekadafari": ["PU 001 - Jekadafari Pri. Sch.", "PU 002 - Kofar Sarki", "PU 003 - Yada Gungume"],
    "Nasarawa": ["PU 001 - Nasarawa Pri. Sch.", "PU 002 - Kofar Mai Unguwa"],
    "Bolari East": ["PU 001 - Bolari Pri. Sch.", "PU 002 - Open Space Park"],
    "Bolari West": ["PU 001 - West Pri. Sch.", "PU 002 - Kofar Hakimi"],
    "Kombani": ["PU 001 - Kombani Pri. Sch.", "PU 002 - Health Clinic"]
  },
  "Akko": {
    "Kumo East": ["PU 001 - Kumo Central Pri. Sch.", "PU 002 - Kofar Sarkin Kumo"],
    "Kumo West": ["PU 001 - West Pri. Sch.", "PU 002 - Dispensary"],
    "Akko": ["PU 001 - Akko Pri. Sch.", "PU 002 - Open Space"],
    "Pindiga": ["PU 001 - Pindiga Central Pri. Sch.", "PU 002 - Kofar Emir"],
    "Gona": ["PU 001 - Gona Pri. Sch.", "PU 002 - Market Area"]
  },
  "Yamaltu/Deba": {
    "Deba": ["PU 001 - Deba Central School", "PU 002 - Kofar Sarki"],
    "Yamaltu": ["PU 001 - Yamaltu Pri. Sch.", "PU 002 - Health Centre"],
    "Lawa": ["PU 001 - Lawa Pri. Sch.", "PU 002 - Open Space"],
    "Hinna": ["PU 001 - Hinna Central Pri. Sch.", "PU 002 - Market Square"]
  },
  "Kaltungo": {
    "Kaltungo West": ["PU 001 - Kaltungo Central School", "PU 002 - Kofar Mai Kaltungo"],
    "Kaltungo East": ["PU 001 - East Pri. Sch.", "PU 002 - Town Hall"],
    "Awogu": ["PU 001 - Awogu Pri. Sch.", "PU 002 - Dispensary"],
    "Ture": ["PU 001 - Ture Pri. Sch.", "PU 002 - Open Space"]
  },
  "Billiri": {
    "Billiri North": ["PU 001 - Central Primary School", "PU 002 - Kofar Mai"],
    "Billiri South": ["PU 001 - South Pri. Sch.", "PU 002 - Market Square"],
    "Bare": ["PU 001 - Bare Pri. Sch.", "PU 002 - Health Post"],
    "Tanglang": ["PU 001 - Tanglang Pri. Sch.", "PU 002 - Open Space"]
  },
  "Dukku": {
    "Dukku North": ["PU 001 - Dukku Central Pri. Sch.", "PU 002 - Kofar Emir"],
    "Dukku South": ["PU 001 - South Pri. Sch.", "PU 002 - Market Area"],
    "Zaune": ["PU 001 - Zaune Pri. Sch.", "PU 002 - Health Clinic"],
    "Jamari": ["PU 001 - Jamari Pri. Sch.", "PU 002 - Kofar Mai Unguwa"]
  },
  "Funakaye": {
    "Bajoga East": ["PU 001 - Bajoga Central Pri. Sch.", "PU 002 - Kofar Hakimi"],
    "Bajoga West": ["PU 001 - West Pri. Sch.", "PU 002 - Market Square"],
    "Ashaka": ["PU 001 - Ashaka Pri. Sch.", "PU 002 - Club House Area"],
    "Tilde": ["PU 001 - Tilde Pri. Sch.", "PU 002 - Dispensary"]
  },
  "Balanga": {
    "Talasse": ["PU 001 - Central Pri. Sch.", "PU 002 - Kofar Hakimi"],
    "Bambam": ["PU 001 - Bambam Pri. Sch.", "PU 002 - Market Area"],
    "Nyuwar": ["PU 001 - Nyuwar Pri. Sch.", "PU 002 - Open Space"],
    "Gelengu": ["PU 001 - Gelengu Pri. Sch.", "PU 002 - Health Post"]
  },
  "Nafada": {
    "Nafada Central": ["PU 001 - Nafada Pri. Sch.", "PU 002 - Kofar Emir"],
    "Barwo": ["PU 001 - Barwo Pri. Sch.", "PU 002 - Open Space"],
    "Jigawa": ["PU 001 - Jigawa Pri. Sch.", "PU 002 - Health Clinic"]
  },
  "Shongom": {
    "Lalaipido": ["PU 001 - Central Pri. Sch.", "PU 002 - Market Square"],
    "Filiya": ["PU 001 - Filiya Pri. Sch.", "PU 002 - Kofar Hakimi"],
    "Gundale": ["PU 001 - Gundale Pri. Sch.", "PU 002 - Dispensary"]
  },
  "Kwami": {
    "Kwami": ["PU 001 - Kwami Central Pri. Sch.", "PU 002 - Kofar Sarki"],
    "Mallam Sidi": ["PU 001 - Mallam Sidi Pri. Sch.", "PU 002 - Market Area"],
    "Doho": ["PU 001 - Doho Pri. Sch.", "PU 002 - Health Post"],
    "Bojude": ["PU 001 - Bojude Pri. Sch.", "PU 002 - Open Space"]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const step0 = document.getElementById('step-0');
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');

  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-to-candidates-btn');
  const submitBtn = document.getElementById('submit-vote-btn');

  const lgaSelect = document.getElementById('lga-select');
  const wardSelect = document.getElementById('ward-select');
  const puSelect = document.getElementById('pu-select');
  const summaryText = document.getElementById('summary-text');

  Object.keys(gombeData).forEach(lga => {
    const opt = document.createElement('option');
    opt.value = lga;
    opt.textContent = lga;
    lgaSelect.appendChild(opt);
  });

  startBtn.addEventListener('click', () => {
    step0.style.display = 'none';
    step1.style.display = 'block';
  });

  lgaSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    wardSelect.innerHTML = '<option value="">-- Zaɓi Ward --</option>';
    puSelect.innerHTML = '<option value="">-- Fara zaɓar Ward --</option>';
    wardSelect.disabled = true;
    puSelect.disabled = true;

    if (val && gombeData[val]) {
      wardSelect.disabled = false;
      Object.keys(gombeData[val]).forEach(ward => {
        const opt = document.createElement('option');
        opt.value = ward;
        opt.textContent = ward;
        wardSelect.appendChild(opt);
      });
    }
  });

  wardSelect.addEventListener('change', (e) => {
    const lga = lgaSelect.value;
    const ward = e.target.value;
    puSelect.innerHTML = '<option value="">-- Zaɓi Polling Unit --</option>';
    puSelect.disabled = true;

    if (ward && gombeData[lga] && gombeData[lga][ward]) {
      puSelect.disabled = false;
      gombeData[lga][ward].forEach(pu => {
        const opt = document.createElement('option');
        opt.value = pu;
        opt.textContent = pu;
        puSelect.appendChild(opt);
      });
    }
  });

  nextBtn.addEventListener('click', () => {
    if (!lgaSelect.value || !wardSelect.value || !puSelect.value) {
      alert("Don Allah cika LGA, Ward, da Polling Unit kafin ka ci gaba!");
      return;
    }
    step1.style.display = 'none';
    step2.style.display = 'block';
  });

  submitBtn.addEventListener('click', () => {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (!selectedCandidate) {
      alert("Don Allah zaɓi ɗan takara guda ɗaya!");
      return;
    }
    step2.style.display = 'none';
    step3.style.display = 'block';
    summaryText.innerHTML = `Mungode! Ka ƙada ƙuri'arka ga <strong>${selectedCandidate.value}</strong> daga ƙaramar hukumar <strong>${lgaSelect.value}</strong>.`;
  });
});
