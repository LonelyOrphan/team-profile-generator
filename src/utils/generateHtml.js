export default function generateHtml(data) {
  const managerCards = [];
  const engineerCards = [];
  const internCards = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty("officeNumber")) {
      managerCards.push(`<div class="col-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="p-4">
          <img
            src="../dist/assets/img/megaphone.png"
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
      engineerCards.push(`<div class="col-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="p-4">
          <img
            src="../dist/assets/img/keyboard.png"
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
              GitHub: <a href="https://github.com/${data[i].github}">${data[i].github}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>`);
    }
    if (data[i].hasOwnProperty("school")) {
      internCards.push(`<div class="col-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="p-4">
          <img
            src="../dist/assets/img/education.png"
            class="card-img-top img-thumbnail"
            alt="university logo"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${data[i].name}</h5>
          <div class="card-header text-center">Intern</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${data[i].id}</li>
            <li class="list-group-item">Email: ${data[i].email}</li>
            <li class="list-group-item">School: ${data[i].school}</li>
          </ul>
        </div>
      </div>
    </div>`);
    }
  }
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <title>My Team</title>
    </head>
    <body>
      <h1 class="text-center my-3">My Team</h1>
  
      <div class="row mt-5 justify-content-center">
        ${managerCards.join("")}
      </div>

      <div class="row mt-5 justify-content-center">
        ${engineerCards.join("")}
      </div>

      <div class="row mt-5 justify-content-center">
        ${internCards.join("")}
      </div>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
}
