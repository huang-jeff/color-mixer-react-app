# Color Mixer (Class Components)

This is a project designed to demonstrate how to build Class Components with React.

## Getting Started

1. Fork/clone

1. `npm install`

1. `npm start`

## Questions

Before adding to the application, make sure you can answer the following questions:

* Take a look at the [constructor](https://github.com/bwreid/color-mixer-react-app/blob/master/src/App.js#L8-L17) for the `src/App.js` file. If you want to access the second color in another method, how would you access it?

* You'll notice that [the colors array is passed through as a prop](https://github.com/bwreid/color-mixer-react-app/blob/master/src/App.js#L32) on a few of the components. How do you expect to be able to access that array within each of those child components?

* Take a look at the [ColorList component](https://github.com/bwreid/color-mixer-react-app/blob/master/src/components/ColorList.js). Is this a functional component or a class component? How do you know?

* View the [ColorMixer component](https://github.com/bwreid/color-mixer-react-app/blob/master/src/components/ColorMixer.js#L5-L6) and explain what these two lines are doing.

* Try changing the `selected` value for a couple of the colors in the `App.js` file. How does this change the `ColorMixer` component?

## Instructions

To complete the application, we will want to make it so that a user can click on each color and add it to be mixed. When they click again, it will remove that color from the mix. Users should also be able to add new colors via the color picker and form on the right of the screen.

Complete the following:

- [x] When a user clicks on one of the colors it will cause that color to be selected and thereby mix it with the other colors.

- [x] When a user clicks on one of the colors that is already a part of the mix, it will remove it from the mix.

- [x] When a user submits a new color, it will be added to the color list on the left side of the screen.

- [x] When a user submits a new color, it will clear out the form upon successful submission.

- [x] BONUS: If the user submits a new color with a name that is less than three characters, the form will not submit.

- [x] BONUS: As the user types in the name, it will show an error state until more than three characters have been typed.
