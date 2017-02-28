const API = {
    URL: 'http://localhost:3000',
    getUser(id){
        // implement REST call here
    },
    getUsers(lastName){
        // implement REST call here
    }
}

const $username = $('#autocomplete-username')
const $results = $('#autocomplete-results')

usersListTpl = users => users.length ?
    `<ul>${users.map(u => `<li data-id="${u.id}">${u.firstName} ${u.lastName}</li>`).join('')}</ul>`
    : `<i>no results</i>`;

$results.html(usersListTpl([0,0,0,0,0,0].map(_ => sample)))

///////////////////////////////////////////////////////////////////////////

const speed = 1000;
const pickRandom = list => list[Math.floor(Math.random() * list.length)]

let users = [];
// load users initially

const userBlockTpl = u => `<div class="user-block col-md-4">
   <h2>${u.firstName} ${u.lastName}</h2>
   <div><strong>salary</strong>: ${(u.salary).toFixed(2)}</div>
   ${u.bio.split('\n').map(par => `<p>${par}</p>\n`).join('')}
</div>`

const $userBlocks = $('#user-blocks')

let i = 0;
setInterval(_ => {
    $userBlocks.append(userBlockTpl(sample));
}, 3000)
