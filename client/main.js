import { Template } from 'meteor/templating'; 
import '../lib/collections.js';
import	'./templates/partials/navbar.html';
import './templates/partials/footer.html';
import './templates/partials/login.html';
import './templates/partials/login.js';
import './templates/mytickets/mytickets.html';
import './templates/mytickets/mytickets.js';
import './templates/department/department.html';
import './templates/department/department.js';
import './templates/tickets/tickets.html';
import './templates/tickets/tickets.js';
import './templates/stafftickets/stafftickets.html';

import '../lib/router.js';
import './main.html';

// Check if Staff
Template.registerHelper('isStaff', function(){
	if(Meteor.user().profile.usertype == 'staff'){
		return true;
	}
});

// Format The Date Using Moment.js
Template.registerHelper('formatDate', function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});