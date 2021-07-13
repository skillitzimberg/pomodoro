# PLANNING

## Steps to Complete
### Page
1. As a user I want to see content that tells me what this app is
    - Display the app name or title
    - Display a descriptive heading

### Work Timer (Default View)
1. As a user I want to see the Work timer showing the starting time (25 minutes) when I open the app
    - Create a containing element with an appropriate id
    - Display a title for the Work timer
    - Display a static timer in the form 00:00
        - Create an element for the Work time
        - Hard code minute & second values into the element

2. As a user I want to see an option to START the Work timer
    - Display an element to be used to start the Work timer

3. As a user I want to see the Work time minutes start decreasing when I click the START option
    - Get a reference to the START element
    - Add an event handler to it
    - Create an event handler
        - Create a reference to the minutes element
        - Multiply the work period (25 minutes) by 60 to get the total remaining seconds
            - 25 minutes * 60 seconds = 1,500 total remaining seconds
            - Minutes remaining = absolute value of seconds remaining / 60
            - Seconds remaining in the minute = total remaining seconds % 60
        - Display the minutes remaining in the minutes timer element
        - Display the seconds remaining in the seconds timer element
        - Disable the START button so that the user cannot start more than one timer at a time

4. As a user I want to see an option to PAUSE the Work timer

5. As a user I want to see the Work time pause when I click the PAUSE option

6. As a user I want to see an option to RESET the Work timer

7. As a user I want to see the Work time return to its full value when I click the RESET option

8. As a user I want to hear a sound when the Work timer runs out (hits 00:00)


### Switch Timer View
1. As a user I want to see an option to SWITCH betweem the Work and Rest timers
    - Display an element to be used to SWITCH between the Work and Rest timers

2. As a user I want to see the Work timer when I use choose that option

3. As a user I want to see the Rest timer when I use choose that option


### Rest Timer
1. As a user I want to see an option to START the Rest timer

2. As a user I want to see the Rest time start decreasing when I click the START option

3. As a user I want to see an option to PAUSE the Rest timer

4. As a user I want to see the Rest time pause when I click the PAUSE option

5. As a user I want to see an option to RESET the Rest timer

6. As a user I want to see the Rest time return to its full value when I click the RESET option

7. As a user I want to hear a sound when the Rest timer runs out (hits 00:00)

## Google Searches & Resources Found
`mdn HTML elements`:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element

`javascript time since`:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime

`js get difference between times in minutes seconds`:
- https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates

## Things I didn't plan for or know about 
- If I use `setInterval` for when the START button is used, I think I'll need to disable the button until after the time is up so that the user can't start multiple timers running.

- How to deal with time?   
    - JS time `Date.now()` is in milliseconds. I need a starting amount of time (25 minutes converted to seconds? 25 * 60 = 1500 seconds), a starting `Date.now()`, and a new `Date.now()` every second (using MDN's method).
    - Can I use the logic that if the `number of seconds % 60 === 0` decrement minutes?
    - 1500 seconds (25 minutes converted to seconds)
    - 1499 seconds (25 minutes converted to seconds minus 1 second)
    - 24 minutes (absolute value of 1499 seconds / 60)
    - 59 seconds (1499 seconds minus 24 minutes * 60 seconds)


## Potential problems
