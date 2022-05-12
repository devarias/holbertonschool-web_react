import $ from "jquery";
import _ from 'lodash';

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

let aux = 0;

const updateCounter = () => {
  aux++;
  $('#count').html(`${aux} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
