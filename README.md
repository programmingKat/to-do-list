# To Do List

A simple browser-based to-do list built with vanilla HTML, CSS, and JavaScript. Add tasks, check them off, and clear completed or all tasks.

## Features

- Add new tasks via a text input and submit button
- Tasks are displayed as a checklist
- Click a task's checkbox to mark it complete, applying a strike-through style
- Click the checkbox again to mark it incomplete (removes the strike-through)
- Delete all completed tasks with one click
- Delete all tasks (completed and active) with one click

## How to access the live site

1. Open [the live site here] (https://programmingkat.github.io/to-do-list/)
2. Type a task into the input field and click the submit button to add it to the list.
3. Click the checkbox next to a task to mark it as done (it will appear with a strike-through).
4. Click **delete completed tasks** to remove all checked-off tasks.
5. Click **delete all tasks** to clear the entire list.

## Project Structure

```
to-do-list/
├── index.html      # Page structure and layout
├── css/
│   └── main.css    # Styling for the list and buttons
└── js/
    └── main.js      # Task creation, completion, and deletion logic
```

## How It Works

- Submitting the form creates a new `<li>` with a checkbox prepended to it, appended to the `#active-list`.
- Clicking anywhere on a task list item toggles a `checked` class, which applies the line-through style via CSS.
- **Delete completed tasks** selects every element with the `checked` class and removes it from the DOM.
- **Delete all tasks** clears the entire contents of `#active-list`.

## Technologies Used

- HTML5
- CSS3 (flexbox)
- Vanilla JavaScript (DOM manipulation, event listeners)

## Possible Improvements

- Add a confirmation prompt before deleting all tasks
- Allow deleting individual tasks (not just completed or all)
- Clear the input field automatically after a task is submitted
- Prevent adding empty/blank tasks
