export default function generateHtml(data) {
  // if arr[0] is a manager, create manager
  // " " create engineer
  // " " create intern
  // loop over each object in the array
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty("officeNumber")) {
      cards.push(`<div class="col-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="p-4">
          <img
            src="./img/megaphone.png"
            class="card-img-top img-thumbnail"
            alt="megaphone logo"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${data[i].name}</h5>
          <div class="card-header text-center">Manager</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${data[i].id}</li>
            <li class="list-group-item">Email: ${data[i].email}</li>
            <li class="list-group-item">
              Office Number: ${data[i].officeNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>`);
    }
    if (data[i].hasOwnProperty("github")) {
      cards.push(`<div class="col-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="p-4">
          <img
            src="./img/keyboard.png"
            class="card-img-top img-thumbnail"
            alt="keyboard logo"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${data[i].name}</h5>
          <div class="card-header text-center">Engineer</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${data[i].id}</li>
            <li class="list-group-item">Email: ${data[i].email}</li>
            <li class="list-group-item">
              GitHub: <a href="#">${data[i].github}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>`)
  }
  console.log(cards);
}

// check what kind of object
// generate html for that object
// return full html with previous html inserted
