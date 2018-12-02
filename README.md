-- OVERVIEW --
After initially speaking to Nick Zak i asked if there was a specific tech the test had to be don in to which his reponse was that "there is no specific tech to use so choose the tech of your choice" so i choose Angular.

-- REASONS FOR CHOOSING ANGULAR --

Angular...
  > Is a tech i know and use regulary
  > Is clean and easy to code as you split code up and keep it relevent to the page you on
  > Is reponsive from out the box but can also use 'Flex' and 'Bootstap'
  > Can use a pre-built component toolbox which contains a vast array of items to use stright out the box
       (Refer to: https://material.angular.io/components/categories)
  > Has better separation of concerns and 'Dependency Injection'
  > Has integration with rxjs Observables which allow you to use Reactive Programming (ReactiveX)
  > Has the ability to plug in design patterns like Redux. This allows better state management with manageable code sizes
  > Has its own optimizations like 'Ahead of Time' compilation (AOT) which reduces your bundle size by a significant amount
  > Comes with Typescript and so you can write strongly typed classes and interfaces and strengthen your code quality
  > Code is split over a page by page so code is clean, short and relevent to the page

I was also going to use BitbBitBucket ucket due to the following factors:
  > Is a tech i know and use regulary
  > Is more secure as i was able to view all other folks of code and thier code for thier test where as in BitBucket you cannot do this if not authorised

I decided not to use BitBucket though.


-- INFORMATION --
Due to me chosing to use Angular there are some changes from the intial test readme which i mwntioned to Nick which he said was fine as long as the main test was convered so the following was either changed or not required.

  > index.html should include these assets:
      - `https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js` >>> Not required
      - `test.js` >>> Each component has its own Typescript file so there was no need for one generic file
      - `test.css` >>> By default the file name is 'styles.css'