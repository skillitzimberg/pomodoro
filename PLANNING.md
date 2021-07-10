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

3. As a user I want to see the Work time start decreasing when I click the START option
    - Get a reference to the START element
    - Add an event handler to it
    - Create an event handler
        - Create a minute timer
        - Create a second timer
        - Decrease the minute timer every 60 seconds
        - Decrease the second timer every 1 second
        - Display these timers in the Work timer element

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


## Things I didn't plan for or know about 

## Potential problems
