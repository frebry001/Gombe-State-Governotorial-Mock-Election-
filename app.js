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
  const selects = document.querySelectorAll('select');
  const lgaSelect = selects[0];
  const wardSelect = selects[1];
  const puSelect = selects[2];
  const sections = document.querySelectorAll('section');

  if (!lgaSelect || !wardSelect || !puSelect) return;

  // Loda LGAs
  Object.keys(gombeData).forEach(lga => {
    const option = document.createElement('option');
    option.value = lga;
    option.textContent = lga;
    lgaSelect.appendChild(option);
  });

  // Sauya LGA
  lgaSelect.addEventListener('change', (e) => {
    const selectedLGA = e.target.value;
    wardSelect.innerHTML = '<option value="">-- Zaɓi Ward --</option>';
    puSelect.innerHTML = '<option value="">-- Fara zaɓar Ward --</option>';
    puSelect.disabled = true;

    if (selectedLGA && gombeData[selectedLGA]) {
      wardSelect.disabled = false;
      Object.keys(gombeData[selectedLGA]).forEach(ward => {
        const option = document.createElement('option');
        option.value = ward;
        option.textContent = ward;
        wardSelect.appendChild(option);
      });
    } else {
      wardSelect.disabled = true;
      wardSelect.innerHTML = '<option value="">-- Fara zaɓar LGA --</option>';
    }
  });

  // Sauya Ward
  wardSelect.addEventListener('change', (e) => {
    const selectedLGA = lgaSelect.value;
    const selectedWard = e.target.value;
    puSelect.innerHTML = '<option value="">-- Zaɓi Polling Unit --</option>';

    if (selectedWard && gombeData[selectedLGA] && gombeData[selectedLGA][selectedWard]) {
      puSelect.disabled = false;
      gombeData[selectedLGA][selectedWard].forEach(pu => {
        const option = document.createElement('option');
        option.value = pu;
        option.textContent = pu;
        puSelect.appendChild(option);
      });
    } else {
      puSelect.disabled = true;
      puSelect.innerHTML = '<option value="">-- Fara zaɓar Ward --</option>';
    }
  });

  // Kunna hanyar wucewa ta maballi (Buttons)
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Tabbatar an zaɓi dukkan filaye gabanin tsallakawa
      if (lgaSelect.value && wardSelect.value && puSelect.value) {
        let currentSection = btn.closest('section');
        if (currentSection && currentSection.nextElementSibling) {
          currentSection.style.display = 'none';
          currentSection.nextElementSibling.style.display = 'block';
        }
      } else {
        alert("Cika dukkan zabubbuka (LGA, Ward, da Polling Unit) kafin ka ci gaba!");
      }
    });
  });
});
