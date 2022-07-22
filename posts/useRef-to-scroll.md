---
title: "Day 3: React useRef hook to scroll to HTML elements."
date: "2022-07-20"
---

## Hi Guys - This is a quick one today.

I recently finished the main page of my portfolio

![Nicholas Lane Portfolio Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e919rr04u08r2dp5sj7a.png)

And I realised.. I couldn't figure out how to get each segment to scroll nicely using the classic

```javascript
window.scrollTo(xCor, yCor);
```

This was because accounting for responsiveness, giving co-ords would make it so our desired scroll to location wasn't quite correct.

So from a quick google, it seems that React has a really nice hook for you to use in times like this- **useRef()**.

For those who don't know - useRef() - is React hook that allows you to store a reference to an object that _**persists through renders.**_

This means it can be used for various things such as:

- Directly accessing the DOM (from which I understand we should leave up to React the majority of the time)
- store a mutable value that does not cause re-renders when updated
- Store the previous state.

The thing we are focusing on though is referring to DOM elements directly.
<br>

## How to use useRef to scroll to an element.

I made this example using the always trusty [code sandbox.](https://codesandbox.io/)

Right, so say I have a div that I want to scroll to, because that contains my about me section.

As a test bed let's just make an example in our App.js component.
Set up your two divs:

```javascript
import "./styles.css";
import React from "react";
export default function App() {
  return (
    <div>
      <div className="mainSection">
        <h1>My Main Section</h1>
      </div>
      <div className="mainSection">
        <h1>My About me section</h1>
      </div>
    </div>
  );
}
```

And your styles.css file:

```css
.mainSection {
  height: 100vh;
}
```

Here we are just making each div have a height of the full viewport so that it's off screen, and we can test this functionality easily.

Now we have to import the hook:

```javascript
import React, { useRef } from "react";
```

You have to declare your ref like so:

```javascript
export default function App() {
  const aboutMeRef = useRef(null);
//...Rest of code
```

Ok so now we need to attach this ref to an actual HTML element, here we are going to attach it to our second div that contains the heading 'My About me section':

```javascript
<div className="mainSection" ref={aboutMeRef}>
  <h1>My About me section</h1>
</div>
```

The last thing we need to do is the logic to scroll to our element.
So, we are going to add a simple button with a onClick event listener.

In our first **div** after our **h1** tag let's add our button:

```javascript
<div className="mainSection">
  <h1>My Main Section</h1>
  <button onClick={buttonHandler}>Go to About Me</button>
</div>
```

Now of course, we need our buttonHandler function that will use our ref, and tell our browser to scroll to it, we are also going to add a smooth behavior to help emphasise that it is working.

```javascript
function buttonHandler() {
  aboutMeRef.current.scrollIntoView({
    behavior: "smooth",
  });
}
```

Ok and with that, let's see if it works.

![Final Product](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/46wdogl2xbd2islmg0sx.gif)

Ok, awesome, it works well.

**As usual** - If any more experienced devs, or the many people who know better want to make some comments or hints in the comments, I am always open to learning!
