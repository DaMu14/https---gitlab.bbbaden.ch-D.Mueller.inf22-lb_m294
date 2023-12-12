var trainings = [];

function saveTraining() {
  var name = document.getElementById('trainingName').value;
  var time = document.getElementById('trainingTime').value;
  var materials = document.getElementById('trainingMaterials').value;
  var description = document.getElementById('trainingDescription').value;

  var training = {
    name: name,
    time: time,
    materials: materials,
    description: description
  };

  trainings.push(training);
  displayTrainings();
}


function displayTrainings() {
  var trainingList = document.getElementById('trainingList');
  trainingList.innerHTML = '';

  trainings.forEach(function(training, index) {
    var trainingItem = document.createElement('div');
    trainingItem.innerHTML = `
      <p><strong>Name:</strong> ${training.name}</p>
      <p><strong>Zeit:</strong> ${training.time}</p>
      <p><strong>Materialien:</strong> ${training.materials}</p>
      <p><strong>Beschreibung:</strong> ${training.description}</p>
      <button onclick="editTraining(${index})">Bearbeiten</button>
      <button onclick="deleteTraining(${index})">Löschen</button>
      <hr>
    `;
    trainingList.appendChild(trainingItem);
  });
}

function editTraining(index) {
  var training = trainings[index];
  document.getElementById('trainingName').value = training.name;
  document.getElementById('trainingTime').value = training.time;
  document.getElementById('trainingMaterials').value = training.materials;
  document.getElementById('trainingDescription').value = training.description;

 
  trainings.splice(index, 1);

  displayTrainings();
}

function deleteTraining(index) {
  trainings.splice(index, 1);
  displayTrainings();
}
