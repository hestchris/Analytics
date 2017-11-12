Analytics
==============



Skills
----------
- event handling
- timing

Background
-----------
As the founder of a new startup, you are obsessed with metrics and want to measure every piece of data you can and correlate it with your conversion rate.  You can gather metrics of their browsing experience through simple activity on the page such as scrolls and clicks. 

Requirements
------------
- Create a long, one-page landing page prototype to test this on. It should be long enough that the user can scroll at least two pages down. This page should have several distinct elements, such as blocks of text, images, etc. The page should also contain a text-area that the user can type into, and at least two links to other websites.
- Collect the following metrics about the user's browsing experience
    - Total time spent on page
    - What percentage of the page was viewed
        - If they scroll down, and then back up, record the furthest down they ever scrolled
    - Time spent hovering the mouse over each element on the page. 
    - How many vowels were typed into the text area
        - Count all the text that was typed, not just what ends up in the text-area
        - Example: If the user typed "hello", then deleted it, and typed "hello" again, you should record that they typed 4 vowels.
    - If they left the page by clicking a link, record which link they clicked. 

- When the user leaves the page, console.log all the metrics you've collected.
    - You can use the `unload` event to run a callback function when the user leaves the page. 
    - You will need to enable the option 'preserve log' in your dev-tools so that you can view the console.log after leaving the page. 

