'use strict';
module.exports = function(app) {
  var taskList = require('../controllers/taskListController');

  app.route('/tasks').get(taskList.list_all_tasks);
};
