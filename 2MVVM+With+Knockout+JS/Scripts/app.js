﻿/* Understanding MVVM Pattern */
//The ViewModel
var viewModelTask = {
    todo : "Understanding MVVM with KnockoutJS",
    completed : "No",
    createdDate : "08-Dec-2013"
}

ko.applyBindings(viewModelTask);