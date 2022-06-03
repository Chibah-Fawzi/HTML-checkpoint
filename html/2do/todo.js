var tasklist = []
var contenuHTML = ""

function addtask() {
  var type = document.getElementById('typeid').value
  var time = document.getElementById('timerid').value
  var title = document.getElementById('tilteid').value

  if (type.length < 4 || !time || title.length < 4) {
    alert('invalid')
  } else {
    var task = {
      type: type,
      time: time,
      title: title
    }

    tasklist.push(task)

    contenuHTML += `
<div class="card bg-light mb-3" >
            <div class="card-header">${task.type}</div>
            <div class="card-body">
              <p class="card-text">${task.time}</p>
               <h5 class="card-title">${task.title}</h5>
            </div>
          </div>
`
    const productDiv = document.getElementById('cardid')
    productDiv.innerHTML = contenuHTML
  }
}