---
active: true
title: 'Markdown Formatting'
date: '2024-01-03'
updated: '2024-01-03'
categories:
  - 'tutorial'
  - 'organization'
coverImage: 'https://images.pexels.com/photos/24414786/pexels-photo-24414786/free-photo-of-door-of-a-hobbit-hole.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
coverWidth: 16
coverHeight: 7
excerpt: Learn how to organize your posts with pagination and categories
---

Here are some different Markdown elements.

## Text Styling & Formatting

Let's explore the various ways to style your text:

**Bold text** is created with double asterisks
_Italic text_ uses single asterisks
**_Bold and italic_** combines both
~~Strikethrough~~ uses double tildes
`Inline code` uses backticks
<mark>Highlighted text</mark> uses HTML mark tags

You can also combine these: **_~~Bold, italic and strikethrough~~_**

## Lists & Organization

### Ordered Lists

1. First item
2. Second item
   1. Nested item 1
   2. Nested item 2
3. Third item

### Unordered Lists

- Main point
  - Sub-point
    - Deep nested point
- Another point
  - Mix and match markers
  * If you prefer

## Blockquotes & Citations

> "All we have to decide is what to do with the time that is given us."
>
> - Gandalf the Grey

## Links & References

Here are some example links:

- [External link](https://example.com)
- [Link with title](https://example.com 'Hover over me!')
- Reference-style [link][1]

[1]: https://example.com 'Reference link'

## Tables

| Feature | Syntax       | Example  |
| ------- | ------------ | -------- |
| Bold    | `**text**`   | **text** |
| Italic  | `*text*`     | _text_   |
| Code    | `` `code` `` | `code`   |

## Code Examples

Inline code: `const greeting = "Hello World!";`

Here's a simple JavaScript function:
`const sum = (a, b) => a + b;`

## Task Lists

- [x] Write the introduction
- [x] Add formatting examples
- [ ] Include advanced features
- [ ] Proofread content

## Special Elements

Emoji support: 🚀 💻 ⭐️

And a code block with syntax highlighting:

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
	console.log(`Number: ${num}`);
});

// Example of async/await
async function fetchData() {
	try {
		const response = await fetch('https://api.example.com/data');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error);
	}
}
```
