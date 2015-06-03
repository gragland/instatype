# instatype
Simple React Typeahead

<b>See it in action: <a href="http://gragland.github.io/instatype/examples/instagram/">Instagram User Search Demo</a></b>

## Props

Prop                       |    Description
---------------------------|----------------
`placeholder`              | Placeholder text for input
`limit`                    | Number of results to show in dropdown
`thumbStyle`               | Set result images to "circle" or "square"
`loadingIcon`              | Path to custom loading icon
`requestHandler`           | <b>Required</b> custom function with params (query, limit, callback) that fetches data, adds "image" and "name" fields to all response objects, and then passes data back to instatype component by calling `callback(data)`. See <a href="https://github.com/gragland/instatype/blob/master/examples/instagram/js/custom-functions.js">requestHandler from example app</a>.
`selectedHandler`              | <b>Required</b> custom function that is called when a dropdown result is clicked. This will be passed the full object initially used to populate that result in the dropdown.
