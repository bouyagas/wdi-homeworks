(() => {

  console.log('show connected');
  const deleteButton = document.querySelector('#delete-item');
  const listContainer = document.querySelector('#list-container');
  const deleteThis = document.querySelector('#delete-item');
  const form = document.querySelector('.update');
  const updateMe = document.querySelector('#update-me');

  function renderBuilding(buildingData) {
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'info-div');
    let buildingName = document.createElement('h2');
    buildingName.textContent = buildingData.name;
    listItem.appendChild(buildingName);
    let buildingAddress = document.createElement('p');
    buildingAddress.textContent = buildingData.address;
    listItem.appendChild(buildingAddress);
    let buildingFloors = document.createElement('p');
    buildingFloors.textContent = `Number of floors: ${buildingData.num_floors}`;
    listItem.appendChild(buildingFloors);
    let updateName = document.createElement('input');
    updateName.setAttribute('type', 'text');
    updateName.setAttribute('name', 'name');
    updateName.setAttribute('placeholder', 'Update building name');
    form.insertBefore(updateName, form.firstChild);
    let submitForm = document.createElement('button');
    submitForm.setAttribute('id', 'update-me');
    submitForm.textContent = 'Update';
    form.appendChild(submitForm);
    listContainer.insertBefore(listItem, listContainer.firstChild);

    function updateBuilding() {
      let name = updateName.value;
      console.log(name);
      form.setAttribute('action', `/shows/buildings/${buildingData.id}/${name}`);

      let qs = (window.location.pathname).split('/');
      let id = parseInt(qs[3]);
      fetch(`/api/buildings/${id}`, {
        method: 'PUT',
        body: new FormData(form)
      });
    }

    submitForm.addEventListener('click', (event) => {
      console.log('clicked');
      updateBuilding();
    })
  }

  function fetchOneBuilding() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/buildings/${id}`)
      .then(r => r.json())
      .then(buildingData=> {
        renderBuilding(buildingData);
      })
  }

  function deleteBuilding() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/buildings/${id}`, { method: 'DELETE' })
    .then(clear());
  }


  function renderApt(aptData) {
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'info-div');
    let aptName = document.createElement('h2');
    aptName.textContent = `Apartment: ${aptData.name}`;
    listItem.appendChild(aptName);
    let aptRooms = document.createElement('p');
    aptRooms.textContent = `Bedrooms: ${aptData.bedrooms}  |  Bathrooms: ${aptData.bathrooms}`;
    listItem.appendChild(aptRooms);
    let aptInfo = document.createElement('p');
    aptInfo.textContent = `Sqft: ${aptData.sqft}  |  Price: ${aptData.price}`;
    listItem.appendChild(aptInfo);
    listContainer.insertBefore(listItem, listContainer.firstChild);
  }

  function fetchOneApt() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/apartments/${id}`)
      .then(r => r.json())
      .then(aptData => {
        renderApt(aptData);
      })
  }

  function deleteApt() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/apartments/${id}`, { method: 'DELETE' })
    .then(clear());
  }

  function renderTenant(tenantData) {
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'info-div');
    let tenantName = document.createElement('h2');
    tenantName.textContent = `Tenant: ${tenantData.name}`;
    listItem.appendChild(tenantName);
    let tenantInfo = document.createElement('p');
    tenantInfo.textContent = `Age: ${tenantData.age}  |  Gender: ${tenantData.gender}`;
    listItem.appendChild(tenantInfo);
    listContainer.insertBefore(listItem, listContainer.firstChild);
  }

  function fetchOneTenant() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/tenants/${id}`)
      .then(r => r.json())
      .then(tenantData => {
        renderTenant(tenantData);
      })
  }

  function deleteTenant() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/tenants/${id}`, { method: 'DELETE' })
    .then(clear());
  }

  function renderDoorman(doormanData) {
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'info-div');
    let doormanName = document.createElement('h2');
    doormanName.textContent = `Doorman: ${doormanData.name}`;
    listItem.appendChild(doormanName);
    let doormanInfo = document.createElement('p');
    doormanInfo.textContent = `Experience: ${doormanData.experience}  |  Shift: ${doormanData.shift}`;
    listItem.appendChild(doormanInfo);
    listContainer.insertBefore(listItem, listContainer.firstChild);
  }

  function fetchOneDoorman() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/doormen/${id}`)
      .then(r => r.json())
      .then(doormanData => {
        renderDoorman(doormanData);
      })
  }

  function deleteDoorman() {
    let qs = (window.location.pathname).split('/');
    let id = parseInt(qs[3]);
    fetch(`/api/doormen/${id}`, { method: 'DELETE' })
    .then(clear());
  }

  function aptOrBuilding() {
    const query = (window.location.pathname).split('/');
    const type = query[2];
    if (type === 'buildings') {
      fetchOneBuilding();
      deleteThis.addEventListener('click', (event) => {
        console.log('clicked!');
        deleteBuilding();
      })
    } else if (type === 'apartments') {
      fetchOneApt();
      deleteThis.addEventListener('click', (event) => {
        console.log('clicked!');
        deleteApt();
      })
    } else if (type === 'tenants') {
      fetchOneTenant();
      deleteThis.addEventListener('click', (event) => {
        console.log('clicked!');
        deleteTenant();
      })
    } else {
      fetchOneDoorman();
      deleteThis.addEventListener('click', (event) => {
        console.log('clicked!');
        deleteDoorman();
      })
    }
  }

  function clear() {
    document.body.removeChild(listContainer);
  }

  window.onload = aptOrBuilding();



})();
