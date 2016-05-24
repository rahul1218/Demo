var eventToUse = 'tap';

$(document).ready(function() {
    makeTemplates();

    bind('.btnSubmit', homeScreen);
    bind('.block', showSideScreen);
    bind('.tasks', showTaskBlock);
    bind('.log', showLogScreen);
    bind('.employee', showEmployeePage);
    bind('.attendance', showAttendanceScreen);
    bind('.projects', showHomeScreen);
    bind('.option', showSelectedBlock);
})

function showAllEmployee() {
  console.log("hjihih");
  $('.container').css('top','280px');
  $('.employeeMemberContainer').show().addClass('slideDown');
  $('.employeeDetails').html('');
  $.tmpl('employeeDetails' , members.categories).appendTo('.employeeDetails');
  bind('.memberImageBlock', hideEmployeeBlock);
}

function hideEmployeeBlock() {
  $('.container').css('top','132px');
  $('.employeeMemberContainer').removeClass('slideDown');
}

function homeScreen(){
  $('.taskContainer').css('display','none');
  $('.rightContainerHeaderPanel').html('');
  $.tmpl('projectPage').appendTo('.rightContainerHeaderPanel');

  $('.loginScreen').addClass('slideRight');
  $('.homeScreen').addClass('splashIn');

  $('.menuBarImage').mouseenter(function(){
    $('.navbarOptions').addClass('navbarSlide');
  })
  $('.navbar').mouseenter(function(){
    $('.navbarOptions').addClass('navbarSlide');
  })
  $('.navbarOptions').mouseleave(function(){
      $('.navbarOptions').removeClass('navbarSlide');
  })

  bind('.btnEmployee', showAllEmployee);
  bind('.block', showSideScreen);
  bind('.tasks', showTaskBlock);
  bind('.log', showLogScreen);
  bind('.employee', showEmployeePage);
  bind('.attendance', showAttendanceScreen);
  bind('.projects', showHomeScreen);
  bind('.option', showSelectedBlock);
  bind('.btnEmployee', showAllEmployee);

}

function showSelectedBlock() {
  $('.option.selected').removeClass('selected');
  $(this).addClass('selected');
}

function showAttendanceScreen() {
    $('.rightContainerHeaderPanel').html('');
    $.tmpl('attendanceOptions').appendTo('.rightContainerHeaderPanel');
    $('.empAttendanceBlock').html();
    $.tmpl('empAttendanceBlock', members.categories).appendTo('.empAttendanceBlock'); 
}

function showEmployeePage() {

    $('.rightContainerHeaderPanel').html('');
    $.tmpl('employeePage').appendTo('.rightContainerHeaderPanel');
    $('.employeeInfoPage').html('');
    $.tmpl('employee', members.categories).appendTo('.employeeInfoPage');
    bind('.employeeInfoContainer', hideSideScreen);
}

function showLogScreen() {
    $('.empLogPage').html('');
    $('.rightContainerHeaderPanel').html('');
    $.tmpl('employeeLog').appendTo('.rightContainerHeaderPanel');
    $.tmpl('empLog', members.categories).appendTo('.empLogPage');
    bind('.project', showSubOptions);
    bind('.task', showSubOptions);
    bind('.completedProject', showSubOptions);
    bind('.projects', showHomeScreen);
}

function showSubOptions() {
  $(this).find('.subOptions').toggleClass('selectedOption');
}

function showHomeScreen(){
  $('.rightContainerHeaderPanel').html('');
  $.tmpl('projectPage').appendTo('.rightContainerHeaderPanel');
}

function showTaskBlock(){
  $('.addedTaskBlock').css('display','block');
  $('.addNewTask').css('display','block');
  $('.rightContainerHeaderPanel').html('');
  $.tmpl('tasksOptions').appendTo('.rightContainerHeaderPanel');
  bind('.option',showSelectedBlock);
  bind('.myTasks', showMyTasks); 
  bind('.block', showSideScreen);
  bind('.allTasks',showTaskBlock); 
   bind('.btnEmployee', showAllEmployee);
}

function showMyTasks() { 
  $('.option.selected').removeClass('selected');
  $('.addedTaskBlock').css('display','none');
  $('.addNewTask').css('display','none');
  $(this).addClass('selected');
  $('.myTasksPage').css('display','block');
  //bind('.taskContainer', hideSideScreen);
}

function showSideScreen() {

  $('.sideScreen .hide.show').removeClass('show');
  var slide = $(this).attr('screen');
  $('.'+slide).addClass('show');
  $('.sideScreen').addClass('slideLeft');

  bind('.btnSave', hideSideScreen);
  bind('.btnCancel', hideSideScreen);
  bind('.assignedMember', showAssignedMember);
  bind('.btnStart', startTaskTimer);
  bind('.btnStartChat', showChatScreen);
}

function showChatScreen(){
  $('.chatPanel').addClass('slideChat');
  bind('.btnCloseChat', function(){
      $('.chatPanel').removeClass('slideChat');
      });

  bind('.btnStartChat', showChatScreen);
  bind('.projectContainer', hideSideScreen);

}

function startTaskTimer(){

  $('.sideScreen').removeClass('slideLeft');
  $('.myTask').css({
        'background-image':'url(../images/startedTaskbg.png)'
       })
       $('.footerPanel').css({
        'background-color':'#EA5565'
       })
       $('.overlay').css({
           'background-color': 'rgba(51,20,24,0.9)',
       'opacity': '0.9',
       })
       $('.btnBlockPause').css({
          'display':'block'
       })
       $('.timer').css({
          'display':'block'
       })
       $('.expectedTimeBlock').css({
        'display':'none'
       })
       $('.project').css({
        'display':'none'
       })
        
      $('.footerPanel .timer').timer({
          format: '%H:%M:%S'
            }); 
      $('.footerPanel .timer').timer();

      $('.block').unbind();

      bind('.btnBlockPause', pauseTaskTimer);
      bind('.overlay', showRemarkPage);
      bind('.btnImage', changeImage);

}
function changeImage(){
  hideSideScreen();

}

function showRemarkPage(){
  
  $('.taskRemarkPage').addClass('show');
  $('.sideScreen').addClass('slideLeft');
  $('.projectTaskDetails').css('display', 'none');
  bind('.btnEndTask', showCongratulationPage);

}

function showCongratulationPage(){
  $('.congratulationPage').css('display','block');

     $('.btnBlockPause').css({
        'display':'none'
       });
   $('.btnBlockResume').css({
        'display':'none'
       });
  var time = $('.footerPanel .timer').data('seconds');
  
  minutes = Math.floor(time/ 60);

  
  $('.footerPanel .timer').timer('remove');
  
  $('.footerPanel .timer').text(minutes + " " + 'minutes');
  bind('.btnThanx', function(){
   $('.sideScreen').removeClass('slideLeft');
  });
  $('.sideScreen').unbind();
}


function pauseTaskTimer(){
   $('.footerPanel .timer').timer('pause'); 
   $('.btnBlockPause').css({
        'display':'none'
       });
   $('.btnBlockResume').css({
        'display':'block'
       });

    bind('.btnBlockResume .btnImage', resumeTaskTimer)
}

function resumeTaskTimer(){

   $('.footerPanel .timer').timer('resume'); 
   $('.btnBlockPause').css({
        'display':'block'
       });
   $('.btnBlockResume').css({
        'display':'none'
       });
}

function hideSideScreen(){
  $('.projectMemberBlock').removeClass('showMembers');
  $('.sideScreen').removeClass('slideLeft');
  $('.projectContainer').unbind();
  $('.empLogContainer').unbind();
  $('.employeeInfoContainer').unbind();
  $('.taskContainer').unbind();
  $('.empAttendanceContainer').unbind();
  
}

function showAssignedMember(){
  $('.assignMembersBlock').html('');
  $.tmpl('assignMembersBlock', members.categories).appendTo('.assignMembersBlock');
  $('.projectMemberBlock').addClass('showMembers');
}