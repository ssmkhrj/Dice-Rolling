# Rolling . . . Action

> Live Demo: https://ssmkhrj.github.io/Dice-Rolling/

# Understanding the code

### Components

1. **RollDice**

- State
  - `dieOneNum`: Number on the first die. Initial value is `six`.
  - `dieTwoNum`: Number on the second die. Initial value is `six`.
  - `isRolling`: Stores whether the rolling animation is currently active or not. Initial value is `false`.
- Props
  - `sides`: An array containing all the possible sides of a die. Default value is `["one", "two", "three", "four", "five", "six"]`
- Methods:
  - `roll`: Picks two random elements from the `sides` prop array. Updates `dieOneNum` and `dieTwoNum` and changes `isRolling` to `true`. Then after one second sets `isRolling` back to `false` using `setTimeout`.
- Rendering: Renders two `Die` components and passes down as props the die number and `isRolling` state as `num` and `animate` respectively. Also, displays a button that calls the `roll` method and is disabled when `isRolling` state is set to `true`.

2. **Die**

- Props
  - `num`: Stores the die number. No Default.
  - `animate`: `true/false` based on whether the die is currently rolling. This decides whether to add the animation or not. No Default.
- Rendering: Simply renders an icon that has classes based on `num` and `animate` props.
