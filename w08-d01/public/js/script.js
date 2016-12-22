'use strict';

(() => {
  const buildingButton = document.querySelector('#buildings');
  const aptButton = document.querySelector('#apartments');
  const tenantButton = document.querySelector('#tenants');
  const doormenButton = document.querySelector('#doormen');
  const listContainer = document.querySelector('#list-container');

  function renderBuildings(buildingData) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (listContainer.hasChildNodes()) {
      listContainer.removeChild(listContainer.lastChild);
    }

    for (let i = 0; i < buildingData.length; i++) {
      let listItem = document.createElement('div');
      listItem.setAttribute('class', 'info-div');
      let buildingName = document.createElement('h2');
      buildingName.textContent = buildingData[i].name;
      listItem.appendChild(buildingName);
      let buildingID = document.createElement('a');
      buildingID.setAttribute('href', `shows/buildings/${buildingData[i].id}`);
      buildingID.textContent = 'More info...';
      listItem.appendChild(buildingID);
      listContainer.appendChild(listItem);
    }
  }

  function fetchBuildings() {
    fetch('/api/buildings')
    .then(r => r.json())
    .then(buildingData => {
      renderBuildings(buildingData);
    });
  }

  function renderApartments(apartmentData) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (listContainer.hasChildNodes()) {
      listContainer.removeChild(listContainer.lastChild);
    }

    for (let i = 0; i < apartmentData.length; i++) {
      let listItem = document.createElement('div');
      listItem.setAttribute('class', 'info-div')
      let aptName = document.createElement('h2');
      aptName.textContent = `Apartment: ${apartmentData[i].name}`;
      listItem.appendChild(aptName);
      let aptID = document.createElement('a');
      aptID.setAttribute('href', `shows/apartments/${apartmentData[i].id}`);
      aptID.textContent = 'More info...'
      listItem.appendChild(aptID);
      listContainer.appendChild(listItem);
    }
  }

  function fetchApartments() {
    fetch('/api/apartments')
    .then(r => r.json())
    .then(apartmentData => {
      renderApartments(apartmentData);
    });
  }

  function renderTenants(tenantData) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (listContainer.hasChildNodes()) {
      listContainer.removeChild(listContainer.lastChild);
    }

    for (let i = 0; i < tenantData.length; i++) {
      let listItem = document.createElement('div');
      listItem.setAttribute('class', 'info-div');
      let tenantName = document.createElement('h2');
      tenantName.textContent = tenantData[i].name;
      listItem.appendChild(tenantName);
      let tenantID = document.createElement('a');
      tenantID.setAttribute('href', `shows/tenants/${tenantData[i].id}`);
      tenantID.textContent = 'More info...';
      listItem.appendChild(tenantID);
      listContainer.appendChild(listItem);
    }
  }

  function fetchTenants() {
    fetch('/api/tenants')
    .then(r => r.json())
    .then(tenantData => {
      renderTenants(tenantData);
    });
  }

  function renderDoormen(doormenData) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (listContainer.hasChildNodes()) {
      listContainer.removeChild(listContainer.lastChild);
    }

    for (let i = 0; i < doormenData.length; i++) {
      let listItem = document.createElement('div');
      listItem.setAttribute('class', 'info-div');
      let doormenName = document.createElement('h2');
      doormenName.textContent = doormenData[i].name;
      listItem.appendChild(doormenName);
      let doormenID = document.createElement('a');
      doormenID.setAttribute('href', `shows/doormen/${doormenData[i].id}`);
      doormenID.textContent = 'More info...';
      listItem.appendChild(doormenID);
      listContainer.appendChild(listItem);
    }
  }

  function fetchDoormen() {
    fetch('/api/doormen')
    .then(r => r.json())
    .then(doormenData => {
      renderDoormen(doormenData);
    });
  }

  buildingButton.addEventListener('click', (event) => {
    console.log('clicked!');
    fetchBuildings();
  })

  aptButton.addEventListener('click', (event) => {
    console.log('clicked!');
    fetchApartments();
  })

  tenantButton.addEventListener('click', (event) => {
    console.log('clicked!');
    fetchTenants();
  })

  doormenButton.addEventListener('click', (event) => {
    console.log('clicked!');
    fetchDoormen();
  })

})();
