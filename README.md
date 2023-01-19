# StopWatch-Project-CN
I created stopwatch with html / css / js

Features:-

Start timer : On click of start button, start the timer. 
If timer is 0 start from beginning else start from wherever last stopped

Stop timer : Stop timer once clicked on the stop button

Reset button : On click of reset stop the watch (if already started) and set timer as 00

Step 1: Basic structure of stopwatch
I created the basic structure of this stop watch using HTML and CSS codes. First of all I designed the Stopwatch webpage  with the help of CSS code.

Here I used the background with blue color in radial-gradiant on the webpage. I have used stopwatch container with height 100vh and display in flex. Border-radius: 10px is used to round the four corners of the box. The box is align in center of the webpage.

Step 2: Create a display to see the time format
I have created a display in this box using these HTML and CSS codes. This display will help to see who is counting time. Here we can see the count of hours, minutes and seconds.

A shadow has been used around this display which has enhanced its beauty. Also using font-size: 100px here will increase the size of the time a bit.

Step 3: Create 3 buttons in the stopwatch for Start, Stop and Reset
Now HTML and CSS codes have been used to create three buttons in the stopwatch i.e. Start, Stop & Reset, below the stopwatch container.

Each button has a width of 100px, displayed in flex with margin 10px and border-radius with 10px. I have used font-size: 30px to increase the size of the text in the button.
Using the css, I have set the background-color of the buttons. Also added different color to buttons when we hover cursor on it. So, we can easily know the clickable button. 

Step 4: Activate the stopwatch using JavaScript
Now stopwatch activate using JavaScript. I have completed the design work using HTML and CSS.
First I set the value of hour, minute and second to zero. This means that these values will be zero when the countdown starts.
Now I have executed the start button using JavaScript. As a result, the countdown will start when we click on that button.
The countdown value will be 0. The countdown will increase every second when we click on it. 
Then I have implemented the pause button to pause the code. The countdown will stop when we click on this button.
I have implemented the reset button(Code is written in javascript file). As a result, when we click on the reset button, 
the time in the display will return to the previous state, ie zero. When you click on this button, 
the value of hours, minutes and seconds will become zero.

I have used the 'if' function in javascript to make the stopwatch work properly.  First I set the time in seconds.
 I have given the condition that when the value of the second is 60, we will see zero in the second cell and one increment in the minute cell.
 When the minute time reaches 60, you will see 0 in the minute cell and 1 in the hour cell.

By this way we can run stopwatch with the help of javascript.










