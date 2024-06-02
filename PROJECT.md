tasks, notes - crud
Login authentication and register 
Tasks
    adding - form 
    check and remove option, name, des, task tag, priority, date and time, reminder(optional), recurring
    @task tag - personal, work, home, ...
    @priority - high, med, low
    @recurring - daily, weakly, monthly custom
    if task is done strike off then push to end
    @viewing the tasks - general list view, based on prio, based on tag, kanban chart, calender view

Notes
    heading, note, tag, search


Tasks
->


Project work
DB
    db schema - userinfo - {email, username, pass, taskRef, notesRef}, 
                   tasks - {title, des, tag, prio, date and time, recurring, useRref}
                   notes - {heading, note, tah, userRef}
BackEnd
    api creation - user tasks - {get, post,del, put}, 
                       user authentication login - {username pass, }
                       signup - {email, usename, pass ,confirm_pass}
FrontEnd
    React - Componenets
    

todo
backend - !!!!!!!check why session is not getting stored properly
          put and delete req for tasks
          notes form handle
          notes data store into db
          get, delete and put req